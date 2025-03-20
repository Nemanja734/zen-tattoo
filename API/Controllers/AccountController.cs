using System;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AccountController(UserManager<AppUser> userManager, IEmailService emailService) : BaseApiController
{
    // Todo: Implement rate limits
    [HttpPost("email-confirmation/{email}")]
    public async Task<ActionResult> SendRegistrationLink([FromRoute] string email)
    {
        var existingUser = await userManager.FindByEmailAsync(email);
        
        if (existingUser != null) return BadRequest("Email already taken");

        var appUser = new AppUser
        {
            Email = email,
        };

        await emailService.SendRegistrationLink(appUser);

        // Todo: Logging when the user was created
        await userManager.CreateAsync(appUser);

        return Ok();
    }

    // Todo: Sign-up with custom password validation
}
