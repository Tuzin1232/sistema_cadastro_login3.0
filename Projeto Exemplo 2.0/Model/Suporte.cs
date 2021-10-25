using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Exemplo_2._0.Model
{
    [Table("suporteregistros")]
    public class Suporte
    {
        public int id { get; set; }
        
        public DateTime data { get; set; }
        
        public string cliente { get; set; }
        
        public string status { get; set; }
        
        public string status_cliente { get; set; }
        
        public string assunto { get; set; }
        
        public string sistema { get; set; }
        
        public string criou { get; set; }
        
        public string respondeu { get; set; }
        
        public DateTime conclusao { get; set; }
        
        public string tempo { get; set; }
    }
}
