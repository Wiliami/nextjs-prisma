export async function handleCreateTag(formData: FormData) {
  // Entrada dos dados
  const tag = formData.get("tag");

  // Validar a tag
  if (!tag) {
    return;
  }

  // Enviar p/ o database
  await fetch("http://localhost:3000/tags", {
    method: "POST",
    body: JSON.stringify({
      tag,
    }),
  });
}