import { $input, $output, $encryptButton, $decryptButton } from "./binding.js";
import { encrypt, decrypt } from "./utils.js";

const handleEncrypt = () => {
  const inputContent = $input.value;
  const textEncrypt = encrypt(inputContent);

  $output.value = textEncrypt
};

const handleDecrypt = () => {
  const outputContent = $output.value;
  const textDecrypt = decrypt(outputContent);

  $input.value = textDecrypt
};

$encryptButton.addEventListener("click", handleEncrypt);
$decryptButton.addEventListener("click", handleDecrypt);
