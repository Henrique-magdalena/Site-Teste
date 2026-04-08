import urllib.request
import os

urls = {
    "index.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzQ0OTAyNTczODFiZjQ5MDY4Mzc1MjdiOGNmNTllNGFkEgsSBxCZp8TnsQwYAZIBIwoKcHJvamVjdF9pZBIVQhMzMDE1MTM1NDAxODQxMjE3MjI0&filename=&opi=89354086",
    "produto.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzM4MDNjZDY2NzRjODQ2YmE5ZWM1ODk3Y2E1Yjc5ZDU1EgsSBxCZp8TnsQwYAZIBIwoKcHJvamVjdF9pZBIVQhMzMDE1MTM1NDAxODQxMjE3MjI0&filename=&opi=89354086",
    "dashboard.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzcwM2ExZTI3MzBlZTRjMTViZmQ4M2EzYjdlOTlkNGU3EgsSBxCZp8TnsQwYAZIBIwoKcHJvamVjdF9pZBIVQhMzMDE1MTM1NDAxODQxMjE3MjI0&filename=&opi=89354086",
    "contato.html": "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzBhOTNiNjQ1Y2Q5ZDQzNzA4MTlkYWI1ZGQ3NTU2OGFlEgsSBxCZp8TnsQwYAZIBIwoKcHJvamVjdF9pZBIVQhMzMDE1MTM1NDAxODQxMjE3MjI0&filename=&opi=89354086"
}

print("Iniciando o download das telas...")

for filename, url in urls.items():
    print(f"Baixando {filename}...")
    try:
        urllib.request.urlretrieve(url, filename)
        print(f"{filename} salvo com sucesso!")
    except Exception as e:
        print(f"Erro ao baixar {filename}: {e}")

print("Download completo!")
