export function formatDate(value: string) {
   let data = value.replace(/\D/g, "");

  if (data.length > 4) {
    data = data.replace(/(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
  } else if (data.length > 2) {
    data = data.replace(/(\d{2})(\d{0,2})/, "$1/$2");
  }

  return data;
}

export function formatISODate(iso: string) {
  const date = new Date(iso);

  if (isNaN(date.getTime())) return "Data inválida";

  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const ano = date.getFullYear();

  return `${dia}/${mes}/${ano}`;
}
