export async function handleCreateTag(formData: FormData) {
  // pega o dados
  const tag = formData.get("tag");

  // validar o dado
  if (!tag) {
    return;
  }

  // enviar o dado para o banco de dados
  await fecth("http://localhost:3000/tags", {
    method: "POST",
    body: JSON.stringify({
      tag,
    }),
  });
}
