using API.Middleware;
using Core.Entities;
using Core.Interfaces;
using DotNetEnv;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

Env.Load();

var ConnectionString = Environment.GetEnvironmentVariable("DEFAULT_CONNECTION");

var CorsClient = "_client";

// http://localhost:5000/scalar/
builder.Services.AddOpenApi();

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: CorsClient,
        policy =>
        {
            policy.WithOrigins("http://localhost:3000", "https://zen-tattoo.de").AllowAnyHeader().AllowAnyMethod();
        });
});

builder.Services.AddDbContext<DatabaseContext>(opt =>
{
    opt.UseMySql(ConnectionString, ServerVersion.AutoDetect(ConnectionString));
});

builder.Services.AddIdentityApiEndpoints<AppUser>().AddEntityFrameworkStores<DatabaseContext>();

builder.Services.Configure<IdentityOptions>(opt =>
{
    opt.Password.RequiredLength = 8;
    opt.Password.RequireDigit = false;
    opt.Password.RequireLowercase = false;
    opt.Password.RequireUppercase = false;
    opt.Password.RequireNonAlphanumeric = false;
});

builder.Services.AddControllers();

builder.Services.AddScoped<IEmailService, EmailService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseMiddleware<ExceptionHandler>();

// Todo: app.UseHttpsRedirection();

app.UseCors(CorsClient);

app.MapControllers();

app.Run();
