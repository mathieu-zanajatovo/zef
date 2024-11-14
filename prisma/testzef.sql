drop database testzef;
create database testzef;

INSERT INTO messagerie (expediteur, sujet, dateheure, contenu)
VALUES
  ('Jean Dupont', 'Réunion de lancement', '2024-11-15 09:00:00+01', 'Bonjour, la réunion de lancement est prévue pour demain matin.'),
  ('Marie Durand', 'Compte rendu de réunion', '2024-11-14 16:30:00+02', 'Voici le compte rendu de notre réunion de l''après-midi.'),
  ('Luc Martin', 'Problème technique', '2024-11-16 14:45:00+00', 'Il y a un problème technique avec le serveur, besoin d''assistance.'),
  ('Sophie Legrand', 'Mise à jour du projet', '2024-11-17 10:00:00+03', 'Mise à jour importante sur le projet de développement de la plateforme.'),
  ('Pierre Moreau', 'Demande de clarification', '2024-11-18 11:30:00+02', 'Pouvez-vous clarifier les points abordés lors de la réunion d''hier ?');
