using System;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AccountController(UserManager<AppUser> userManager, IEmailService emailService) : BaseApiController
{
    // Todo: Implement rate limits
    [HttpPost("email-confirmation")]
    public async Task<ActionResult> SendRegistrationLink(string email)
    {
        var existingUser = await userManager.FindByEmailAsync(email);
        
        if (existingUser?.FirstName != null)
        {
            return BadRequest("Email already taken");
        }

        if (existingUser != null)
        {
            await emailService.SendRegistrationLink(existingUser.Id, existingUser.Email!);
            return Ok();
        }

        // Todo: Logging when the user was created
        var appUser = new AppUser
        {
            Email = email,
            UserName = email,
        };

        await userManager.CreateAsync(appUser);

        await emailService.SendRegistrationLink(appUser.Id, appUser.Email);
        
        return Ok();
    }

    // Todo: Sign-up with custom password validation
}
