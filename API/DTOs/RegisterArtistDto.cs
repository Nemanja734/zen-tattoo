using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterArtistDto
{
    [Required]
    public string Id { get; set; } = string.Empty;

    [Required]
    public string FirstName { get; set; } = string.Empty;

    [Required]
    public string LastName { get; set; } = string.Empty;

    [Required]
    public string PhoneNumber { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;
}
