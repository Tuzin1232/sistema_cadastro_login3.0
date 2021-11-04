using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Projeto_Exemplo_2._0.Model;
using System;

namespace Projeto_Exemplo_2._0.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackSuporteController : Controller
    {
        private readonly AppDatabase _Context;

        public FeedbackSuporteController(AppDatabase Context)
        {
            _Context = Context;
        }

        [HttpPost("feedback")]
        [AllowAnonymous]
        public IActionResult Postar([FromBody] FeedbackSuporte model )
        {
            try
            {
                _Context.FeedbackSuporte.Add(model);
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
