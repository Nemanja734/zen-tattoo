using System;
using System.Reflection.Metadata.Ecma335;
using System.Text.RegularExpressions;
using API.DTOs;
using Core.Entities;
using Core.Exceptions;
using Core.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AccountController(UserManager<AppUser> userManager, IEmailService emailService) : BaseApiController
{
    // Todo: Implement rate limits
    [HttpPost("email")]
    public async Task<ActionResult> CreateEmail([FromBody] CreateEmailDto email)
    {
        var user = await userManager.FindByEmailAsync(email.Email);

        if (user != null) throw new ConflictException("Email already taken");
        
        var newUser = new AppUser
        {
            Email = email.Email,
            UserName = Regex.Replace(email.Email, "[^a-zA-Z0-9]", ""),
        };

        var result = await userManager.CreateAsync(newUser);

        if (!result.Succeeded) return BadRequest(result.Errors);

        // Todo: Logging when the user was created

        await emailService.SendRegistrationLink(newUser.Id, newUser.Email);

        return Ok();
    }

    // Todo: Resend registration link

    [HttpPost("register/artist")]
    public async Task<ActionResult> RegisterArtist(RegisterArtistDto artist)
    {
        var user = await userManager.FindByIdAsync(artist.Id) ?? throw new NotFoundException("User not found");

        return Ok();
    }
}
