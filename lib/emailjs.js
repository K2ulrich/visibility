import emailjs from "@emailjs/browser";

/**
 * Envoie le formulaire de contact via EmailJS.
 * Nécessite les 3 variables d'environnement NEXT_PUBLIC_EMAILJS_* définies
 * dans .env.local (voir documentation/05-configuration-emailjs.md).
 *
 * @param {Record<string, string>} formData - paires clé/valeur du formulaire
 * @returns {Promise<void>} rejette une erreur en cas d'échec
 */
export async function sendContactMessage(formData) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "Configuration EmailJS manquante. Vérifiez votre fichier .env.local."
    );
  }

  return emailjs.send(serviceId, templateId, formData, { publicKey });
}
