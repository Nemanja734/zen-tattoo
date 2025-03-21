using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class CreateEmailDto
{
    [Required]
    public string Email { get; set; } = string.Empty;
}
