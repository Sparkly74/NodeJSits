FROM node
# Répertoire de travail
WORKDIR /app
# Copier le code de l'application
COPY . .
# Changer le propriétaire du répertoire de travail
RUN chown -R node:node /app
# Utiliser l'utilisateur 'node' pour exécuter les commandes suivantes
USER node
# installation des lib pour le projet
RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
