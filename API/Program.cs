using Core.Entities;
using Core.Interfaces;
using DotNetEnv;
using Infrastructure.Data;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

Env.Load();

var connectionString = Environment.GetEnvironmentVariable("DEFAULT_CONNECTION");

builder.Services.AddOpenApi();

builder.Services.AddDbContext<DatabaseContext>(opt =>
{
    // Todo: Enable logging
    opt.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});

//builder.Services.AddAuthorization();
builder.Services.AddIdentityApiEndpoints<AppUser>().AddEntityFrameworkStores<DatabaseContext>();

builder.Services.AddControllers();

builder.Services.AddScoped<IEmailService, EmailService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

// Todo: app.UseHttpsRedirection();

// app.UseAuthorization();
// app.UseAuthorization();

app.MapControllers();

app.Run();
