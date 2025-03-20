using System;
using System.Net;
using System.Net.Mail;
using Core.Entities;
using Core.Interfaces;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.Services;

public class EmailService : IEmailService
{
    private readonly IConfiguration _config;
    private readonly string smtpServer = Environment.GetEnvironmentVariable("SMTP_SERVER") ?? throw new ArgumentNullException("SMTP_SERVER not found");
    private readonly string smtpPort = Environment.GetEnvironmentVariable("SMTP_PORT")!;
    private readonly string smtpSenderName = Environment.GetEnvironmentVariable("SMTP_SENDER_NAME")!;
    private readonly string smtpSenderEmail = Environment.GetEnvironmentVariable("SMTP_SENDER_EMAIL")!;
    private readonly string smtpUsername = Environment.GetEnvironmentVariable("SMTP_USERNAME")!;
    private readonly string smtpPassword = Environment.GetEnvironmentVariable("SMTP_PASSWORD")!;

    public EmailService(IConfiguration config)
    {
        _config = config;
    }

    public async Task SendRegistrationLink(AppUser appUser)
    {
        var subject = "Your Registration Link";
        var bodyContent = $"Your registration link is: <strong><a href='https://localhost:3000/${appUser.Id}'>LINK TO REGISTRATION</a></strong>. This code is valid for 5 minutes.";
        var email = new Email
        {
            ToEmail = appUser.Email!,
            Subject = subject,
            HtmlBody = bodyContent,
        };

        await SendEmailAsync(email);
    }

    private async Task SendEmailAsync(Email email)
    {
        var smtpClient = new SmtpClient(smtpServer)
        {
            Port = int.Parse(smtpPort),
            Credentials = new NetworkCredential(
                smtpUsername,
                smtpPassword
            ),
            EnableSsl = true,
        };

        var mailMessage = new MailMessage
        {
            From = new MailAddress(smtpSenderEmail, smtpSenderName),
            Subject = email.Subject,
            Body = email.HtmlBody,
            IsBodyHtml = true
        };

        // Don't seed the rest if on prod
        if (_config["Environment"] == "Production")
        {
            mailMessage.To.Add(email.ToEmail);
        }

        // Used for testing
        mailMessage.To.Add("nemanja.tomic@ik.me");

        try
        {
            await smtpClient.SendMailAsync(mailMessage);
        }
        catch (SmtpException ex)
        {
            Console.WriteLine("SMTP Error: " + ex);
        }
    }
}
