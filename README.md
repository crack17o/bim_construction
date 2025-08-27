# BIM Construction - Site Web

Site internet monopage pour BIM Construction, une entreprise de construction évoluant en République Démocratique du Congo.

## Fonctionnalités

- Site web responsive avec design moderne et professionnel
- Sections : Accueil, À propos, Services, Valeurs, Portfolio, Équipe, et Contact
- Formulaire de contact fonctionnel (sans backend)
- Navigation fluide entre les sections
- Intégration des réseaux sociaux et WhatsApp

## Technologies utilisées

- React JS
- Vite
- Styled Components
- React Icons
- React Scroll
- EmailJS

## Configuration de l'envoi d'emails

Pour configurer l'envoi d'emails via le formulaire de contact, suivez ces étapes :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service d'email (Gmail, Outlook, etc.)
   - Dans le dashboard EmailJS, allez dans "Email Services"
   - Cliquez sur "Add New Service"
   - Choisissez votre fournisseur d'email et suivez les instructions
   - Notez l'ID de service créé (ex: `service_bim_construction`)

3. Créez un modèle d'email
   - Dans le dashboard EmailJS, allez dans "Email Templates"
   - Cliquez sur "Create New Template"
   - Créez votre modèle avec les variables suivantes :
     - `{{from_name}}` : Nom de l'expéditeur
     - `{{from_email}}` : Email de l'expéditeur
     - `{{from_phone}}` : Téléphone de l'expéditeur
     - `{{subject}}` : Sujet du message
     - `{{message}}` : Contenu du message
   - Notez l'ID du template créé (ex: `template_contact_form`)

4. Récupérez votre User ID
   - Dans le dashboard EmailJS, allez dans "Account"
   - Copiez votre User ID

5. Mettez à jour le fichier `src/components/organisms/Contact.jsx`
   - Remplacez `YOUR_USER_ID` par votre User ID
   - Remplacez les valeurs de service_id et template_id si nécessaire
