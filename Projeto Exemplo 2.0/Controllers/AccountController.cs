using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Projeto_Exemplo_2._0;
using Projeto_Exemplo_2._0.Model;
using Projeto_Exemplo_2._0.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoExemplo_2._0.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class AccountController : Controller
    {
        private readonly AppDatabase _Context;

        public AccountController(AppDatabase Context)
        {
            _Context = Context;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public IActionResult Authenticate([FromBody] Usuario model)
        {
            try
            {
                var service = new UserService(_Context);
                var user = service.Authenticate(model.nome, model.senha);

                if (user == null)
                {
                    var a = "Usuário ou senha inválidos.";
                    return BadRequest(a);
                }

                return Ok(user);

            }
            catch
            {
                return BadRequest("Falha ao realizar login");
            }

        }

        [HttpPost("cadastrar")]
        [AllowAnonymous]
        public IActionResult Cadastrar([FromBody] Usuario model)
        {
            try
            {
                var usuarioExistente = _Context.Usuarios.Where(u => u.nome.ToUpper() == model.nome.ToUpper()).Count() > 0;
                if (!usuarioExistente)
                {
                    _Context.Usuarios.Add(model);

                    _Context.SaveChanges();

                    return Ok("Usuário cadastrado com sucesso");
                }
                else
                {
                    return BadRequest("Usuário já cadastrado");
                }

            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao realizar cadastro: " + ex.Message);
            }

        }
        [HttpPut("alterar")]
        [AllowAnonymous]
        public IActionResult Alterar([FromBody] Usuario model)
        {
            try
            {
                var usuarioExistente = _Context.Usuarios.Where(u => u.nome.ToUpper() == model.nome.ToUpper()).FirstOrDefault();
                if (usuarioExistente != null)
                {
               
                    usuarioExistente.senha = model.senha;

                    _Context.SaveChanges();

                    return Ok("Usuário alterado com sucesso");
                }
                else
                {
                    return BadRequest("Usuário não encontrado");
                }
            }
            catch(Exception ex)
            {
                return BadRequest("Falha ao alterar sua conta: " + ex.Message);
            }
        }
        
        [HttpDelete("excluir")]
        [AllowAnonymous]
        public IActionResult Excluir([FromBody] Usuario model)
        {
            try
            {
                var usuarioExistente = _Context.Usuarios.Where(u => u.nome.ToUpper() == model.nome.ToUpper()).FirstOrDefault();
                if (usuarioExistente != null)
                {
                    usuarioExistente = model;

                    _Context.Remove(usuarioExistente);

                    return Ok("Usuário excluído com sucesso");
                }
                else
                {
                    return BadRequest("Falha ao excluir sua conta");
                }
            }
            catch(Exception ex)
            {
                return BadRequest("Falha ao excluir sua conta: " + ex.Message);
            }
        }
    }

}