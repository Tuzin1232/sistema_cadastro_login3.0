using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Projeto_Exemplo_2._0;
using Projeto_Exemplo_2._0.Model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ProjetoExemplo_2._0.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuporteController : Controller
    {
        private readonly AppDatabase _Context;

        public SuporteController(AppDatabase Context)
        {
            _Context = Context;
        }

        [HttpPost("postarSuporte")]
        [AllowAnonymous]
        public IActionResult Postar([FromBody] Suporte model)
        {
            try
            {
                _Context.Suporte.Add(model);
                _Context.SaveChanges();

                return Ok("Suporte Cadastrado com sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao realizar cadastro: " + ex.Message);
            }
        }
    }
}
