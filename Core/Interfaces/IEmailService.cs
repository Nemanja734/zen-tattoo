using System;
using Core.Entities;

namespace Core.Interfaces;

public interface IEmailService
{
    Task SendRegistrationLink(AppUser appUser);
}
