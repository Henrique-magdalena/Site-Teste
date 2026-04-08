import os

files = ['index.html', 'produto.html', 'contato.html', 'dashboard.html']

link_replacements = {
    'href="#">Início</a>': 'href="index.html">Início</a>',
    'href="#">Produtos</a>': 'href="produto.html">Produtos</a>',
    'href="#">Categoria</a>': 'href="produto.html">Categoria</a>',
    'href="#">Contato</a>': 'href="contato.html">Contato</a>',
    'href="#">Shop</a>': 'href="produto.html">Shop</a>',
    'href="#">Lookbook</a>': 'href="index.html">Lookbook</a>',
    'href="#">Collections</a>': 'href="produto.html">Collections</a>',
    'href="#">Archive</a>': 'href="produto.html">Archive</a>',
}

button_replacements = {
    '>Comprar</button>': ' onclick="window.location.href=\'produto.html\'">Comprar</button>',
    '>Shop Now</button>': ' onclick="window.location.href=\'produto.html\'">Shop Now</button>',
    '>Adicionar Produto</button>': ' onclick="window.location.href=\'produto.html\'">Adicionar Produto</button>',
    '>Básicos</button>': ' onclick="window.location.href=\'produto.html\'">Básicos</button>',
    '>Ver Coleção</button>': ' onclick="window.location.href=\'produto.html\'">Ver Coleção</button>'
}

for file in files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        for old, new in link_replacements.items():
            content = content.replace(old, new)
            
        for old, new in button_replacements.items():
            content = content.replace(old, new)
            
        # Corrigir itens da sidebar tbm
        content = content.replace('<a class="bg-blue-600 text-white rounded-xl mx-2 px-4 py-3 flex items-center gap-3 font-label" href="#">\n<span class="material-symbols-outlined">home</span> Início', '<a class="bg-blue-600 text-white rounded-xl mx-2 px-4 py-3 flex items-center gap-3 font-label" href="index.html">\n<span class="material-symbols-outlined">home</span> Início')
        content = content.replace('<a class="text-indigo-900/70 dark:text-indigo-100/70 px-4 py-3 flex items-center gap-3 font-label hover:bg-indigo-100 transition-all" href="#">\n<span class="material-symbols-outlined">dry_cleaning</span> Produtos', '<a class="text-indigo-900/70 dark:text-indigo-100/70 px-4 py-3 flex items-center gap-3 font-label hover:bg-indigo-100 transition-all" href="produto.html">\n<span class="material-symbols-outlined">dry_cleaning</span> Produtos')
        content = content.replace('<a class="text-indigo-900/70 dark:text-indigo-100/70 px-4 py-3 flex items-center gap-3 font-label hover:bg-indigo-100 transition-all" href="#">\n<span class="material-symbols-outlined">category</span> Categoria', '<a class="text-indigo-900/70 dark:text-indigo-100/70 px-4 py-3 flex items-center gap-3 font-label hover:bg-indigo-100 transition-all" href="produto.html">\n<span class="material-symbols-outlined">category</span> Categoria')
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print("SUCESSO: Todos os botoes de navegacao conectados entre as paginas!")
