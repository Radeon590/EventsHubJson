using EventsHubApi.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using System.Security.Claims;
using System;
using Microsoft.AspNetCore.Authorization;

namespace EventsHubApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationContext _applicationContext;

        public UsersController(ApplicationContext applicationContext) 
        {
            _applicationContext = applicationContext;
        }

        [HttpPost]
        [Route("Create")]
        public async Task<IResult> Create(string username, string useremail, string password, string firstname, string secondname, string patronymic, int age)
        {
            //check unique
            int countNotUnique = await _applicationContext.Users.Where(u => u.Username == useremail || u.UserEmail == useremail).CountAsync();
            if (countNotUnique > 0) 
            {
                return Results.Conflict("user with this username ot useremail is exists");
            }
            //
            User newUser = new User(username, useremail, password, firstname, secondname, patronymic, age);
            await _applicationContext.Users.AddAsync(newUser);
            await _applicationContext.SaveChangesAsync();
            //TODO: check return id
            return Results.Ok(newUser.Id);
        }

        [HttpGet]
        [Route("Authorize")]
        public async Task<IResult> Authorize(string username, string password)
        {
            var user = await _applicationContext.Users.Where(u => u.Username == username && u.Password == password).FirstOrDefaultAsync();
            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, username),
                    new Claim(ClaimTypes.Role, AuthRoles.User)
                };
                var claimsIdentity = new ClaimsIdentity(claims, "Cookies");
                var claimsPrincipal = new ClaimsPrincipal(claimsIdentity);
                return Results.SignIn(claimsPrincipal);
            }
            return Results.NotFound();
        }

        [HttpGet]
        [Route("NotAuthorized")]
        public IResult NotAuthorized()
        {
            return Results.StatusCode(401);
        }

        [HttpGet]
        [Route("Read")]
        [Authorize(Roles = AuthRoles.User)]
        public async Task<IResult> Read(int id)
        {
            User? user = await _applicationContext.Users.Where(u => u.Id == id).FirstOrDefaultAsync();
            if (user != null)
            {
                return Results.Json(user);
            }
            return Results.NotFound();
        }

        [HttpPatch]
        [Route("Update")]
        [Authorize(Roles = AuthRoles.User)]
        public async Task<IResult> Update(int id)
        {
            User? updateUser = await HttpContext.Request.ReadFromJsonAsync<User>();
            if (updateUser != null) 
            {
               // return Results.Json(_applicationContext.Users.Where(u => u.Id == id).FirstOrDefault());
                User? oldUser = await _applicationContext.Users.Where(u => u.Id == id).FirstOrDefaultAsync();
                if (oldUser != null)
                {
                    oldUser.Username = updateUser.Username;
                    oldUser.UserEmail = updateUser.UserEmail;
                    oldUser.Password = updateUser.Password;
                    oldUser.FirstName = updateUser.FirstName;
                    oldUser.SecondName = updateUser.SecondName;
                    oldUser.Patronymic = updateUser.Patronymic;
                    oldUser.Age = updateUser.Age;
                    //
                    await _applicationContext.SaveChangesAsync();
                    return Results.Ok();
                }
                return Results.NotFound("old user not found");
            }
            return Results.BadRequest("cant get user from json body");
        }
    }
}
