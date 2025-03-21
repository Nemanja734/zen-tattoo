using System;
using API.DTOs;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AccountController(UserManager<AppUser> userManager, IEmailService emailService) : BaseApiController
{
    // Todo: Implement rate limits
    [HttpPost("email")]
    public async Task<ActionResult<string>> CreateEmail([FromBody] CreateEmailDto email)
    {
        var user = await userManager.FindByEmailAsync(email.Email);

        if (user != null) return Conflict("Email already taken");
        
        // Todo: Logging when the user was created
        var newUser = new AppUser
        {
            Email = email.Email,
            UserName = email.Email,
        };

        await userManager.CreateAsync(newUser);

        await emailService.SendRegistrationLink(newUser.Id, newUser.Email);

        return Ok();
    }

    // Todo: Resend registration link

    // Todo: Sign-up with custom password validation
}
