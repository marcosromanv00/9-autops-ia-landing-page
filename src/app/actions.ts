"use server";

/**
 * Server Action to handle contact form submissions.
 * This demonstrates fullstack capabilities in Next.js 15.
 */
export async function submitContactForm(formData: FormData) {
  // Simulate database or API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const data = {
    email: formData.get("email"),
    message: formData.get("message"),
  };

  console.log("Form submission received:", data);

  // In a real scenario, you would send this to an email service or database
  return {
    success: true,
    message: "¡Gracias! Tu mensaje ha sido recibido con éxito.",
  };
}
