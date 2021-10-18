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
    public class ClienteController : Controller
    {
        private readonly AppDatabase _Context;

        public ClienteController(AppDatabase Context)
        {
            _Context = Context;
        }
        [HttpPost("cadastrar")]
        [AllowAnonymous]
        public IActionResult Cadastrar([FromBody] Cliente model)
        {
            try
            {
                var clienteExistente = _Context.Clientes.Where(u => u.nome.ToUpper() == model.nome.ToUpper()).Count() > 0;
                if (!clienteExistente)
                {
                    _Context.Clientes.Add(model);

                    _Context.SaveChanges();

                    return Ok("Cliente cadastrado com sucesso");
                }
                else
                {
                    return BadRequest("Cliente já cadastrado");
                }

            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao realizar cadastro: " + ex.Message);
            }

        }
        [HttpPut("alterar")]
        [AllowAnonymous]
        public IActionResult Alterar([FromBody] Cliente model)
        {
            try
            {
                var clienteExistente = _Context.Clientes.Where(u => u.nome.ToUpper() == model.nome.ToUpper()).FirstOrDefault();
                if (clienteExistente != null)
                {

                    clienteExistente = model;

                    _Context.SaveChanges();

                    return Ok("Informações alteradas com sucesso");
                }
                else
                {
                    return BadRequest("Falha ao alterar suas informações");
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message);
            }
        }
        [HttpDelete("excluir")]
        [AllowAnonymous]
        public IActionResult Excluir([FromBody] Cliente model)
        {
            try
            {
                var clienteExistente = _Context.Clientes.Where(u => u.nome.ToUpper() == model.nome.ToUpper()).FirstOrDefault();
                if (clienteExistente != null)
                {
                    _Context.Remove(clienteExistente);
                    _Context.SaveChanges();
                    return Ok("Informações do cliente excluidas");
                }
                else
                {
                    return BadRequest("Falha ao excluir suas informações");
                }
            }
            catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message);
            }
        }
        [HttpPost("clientes")]
        [AllowAnonymous]
        public ActionResult<List<Cliente>> GetClientes()
        {
            try
            {
                return Ok(_Context.Clientes.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest("Error: " + ex.Message);
            }
        }

    }
}
