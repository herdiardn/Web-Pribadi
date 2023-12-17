<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nama = $_POST["nama"];
  $email = $_POST["email"];
  $pesan = $_POST["pesan"];
  
  $to = "herdi_ardn@gmail.com"; // Ganti dengan alamat email tujuan
  $subject = "Pesan dari $nama melalui Form Kontak";
  $message = "Nama: $nama\nEmail: $email\n\nPesan:\n$pesan";
  $headers = "From: $email";
  
  if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
  } else {
    http_response_code(500);
  }
}
?>
