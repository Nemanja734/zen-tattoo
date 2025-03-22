using System;
using Core.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("unauthorized")]
    public ActionResult GetUnauthorized()
    {
        throw new UnauthorizedException("Unauthorized user");
    }

    [HttpGet("badrequest")]
    public ActionResult GetBadRequest()
    {
        throw new BadRequestException("A bad request has been made");
    }

    [HttpGet("notfound")]
    public ActionResult GetNotFound()
    {
        throw new NotFoundException("Not found");
    }

    [HttpGet("internalerror")]
    public ActionResult GetInternalError()
    {
        throw new InternalServerErrorException("Something unexpected happened");
    }

    [HttpPost("validationerror/{id}")]
    public ActionResult GetValidationError(int id)
    {
        return Ok();
    }
}
