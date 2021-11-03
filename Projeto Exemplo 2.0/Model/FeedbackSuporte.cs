using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Exemplo_2._0.Model
{
    [Table("feedback")]
    public class FeedbackSuporte
    {
        public int id { get; set; }

        public DateTime data { get; set; }

        public string cliente { get; set; }

        public string ususario { get; set; }

        public string tipo { get; set; }

        public string sistema { get; set; }

        public string status { get; set; }

        public string assunto { get; set; }

        public string responsavel { get; set; }

        public string feedback { get; set; }
    }
}
