import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — maformationcivique.fr",
  description: "Conditions générales d'utilisation et de vente de maformationcivique.fr",
  alternates: { canonical: 'https://www.maformationcivique.fr/cgu' },
};

const LAST_UPDATE = '3 septembre 2026';
const COMPANY    = 'Ugo Tamburrini (Entrepreneur individuel — YOU.)';
const SIRET      = '908 675 259 00018';
const ADDRESS    = '7B Rue Monge, 94110 Arcueil, France';
const EMAIL      = 'contact@maformationcivique.fr';
const SITE       = 'https://www.maformationcivique.fr';

export default function CguPage() {
  return (
    <div style={{ background: '#F8F9FB', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '760px', padding: '0 24px' }}>

        {/* En-tête */}
        <div style={{ marginBottom: '48px' }}>
          <span style={{
            fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', color: 'var(--color-blue-france)',
          }}>
            Document légal
          </span>
          <h1 style={{
            fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700,
            color: 'var(--color-text-primary)', margin: '10px 0 12px',
            letterSpacing: '-0.02em',
          }}>
            Conditions Générales d&apos;Utilisation
          </h1>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
            Dernière mise à jour : <strong>{LAST_UPDATE}</strong> — Version 2.2
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          {/* ── ARTICLE 1 ── */}
          <Section num="1" title="Présentation et identité de l'éditeur">
            <p>
              Le site <strong>{SITE}</strong> (ci-après « le Site ») est édité par :
            </p>
            <InfoBlock rows={[
              ['Raison sociale', COMPANY],
              ['SIRET', SIRET],
              ['Adresse', ADDRESS],
              ['E-mail de contact', EMAIL],
              ['Hébergeur', 'Vercel Inc. — 340 Pine Street, Suite 1200, San Francisco, CA 94104, USA'],
            ]} />
            <p>
              Le Site propose une plateforme de formation en ligne destinée aux ressortissants
              étrangers souhaitant préparer leur intégration en France, notamment en vue
              de l&apos;obtention d&apos;une carte de séjour pluriannuelle, d&apos;une carte de résident
              ou d&apos;une naturalisation.
            </p>
            <p>
              Les services proposés comprennent : (i) une <strong>formation civique</strong>
              conforme au programme officiel OFPRA, (ii) une <strong>formation linguistique
              en français</strong> (niveaux A2 à B2), (iii) des <strong>offres à destination
              des particuliers</strong> (B2C) sous forme d&apos;abonnements mensuels, et
              (iv) des <strong>offres à destination des professionnels</strong> (B2B) — cabinets
              d&apos;avocats, associations, structures d&apos;aide à l&apos;intégration — sous forme de
              licences multi-utilisateurs et d&apos;outils d&apos;aperçu et de suivi.
            </p>
          </Section>

          {/* ── ARTICLE 2 ── */}
          <Section num="2" title="Acceptation des conditions">
            <p>
              L&apos;accès et l&apos;utilisation du Site impliquent l&apos;acceptation pleine et entière
              des présentes Conditions Générales d&apos;Utilisation (ci-après « CGU »).
              Tout utilisateur qui accède au Site déclare avoir lu, compris et accepté
              ces conditions sans réserve.
            </p>
            <p>
              Si vous n&apos;acceptez pas les présentes CGU, vous devez cesser immédiatement
              l&apos;utilisation du Site.
            </p>
            <p>
              Les présentes CGU peuvent être modifiées à tout moment (voir Article 17).
              La version applicable est celle en ligne au moment de l&apos;utilisation du Site.
            </p>
          </Section>

          {/* ── ARTICLE 3 ── */}
          <Section num="3" title="Création de compte">
            <p>
              Pour accéder aux fonctionnalités du Site (suivi de progression, examens blancs,
              contenu premium), l&apos;utilisateur doit créer un compte en fournissant :
            </p>
            <ul>
              <li>Une adresse e-mail valide</li>
              <li>Un mot de passe sécurisé (minimum 8 caractères)</li>
              <li>Un prénom (facultatif, pour personnaliser l&apos;expérience)</li>
            </ul>
            <p>
              L&apos;utilisateur s&apos;engage à fournir des informations exactes et à les maintenir
              à jour. Chaque compte est strictement personnel et ne peut être partagé.
              L&apos;utilisateur est responsable de la confidentialité de ses identifiants.
            </p>
            <p>
              En cas d&apos;utilisation non autorisée de son compte, l&apos;utilisateur doit en
              informer immédiatement l&apos;éditeur à {EMAIL}.
            </p>
          </Section>

          {/* ── ARTICLE 4 ── */}
          <Section num="4" title="Offres B2C et tarifs">
            <h3>4.1 Offre Gratuite</h3>
            <p>
              L&apos;offre gratuite permet l&apos;accès, sans inscription ni paiement, à un
              aperçu limité du contenu (première leçon de chaque module). L&apos;accès aux
              examens blancs et à l&apos;ensemble du contenu pédagogique nécessite la
              souscription à l&apos;une des offres payantes ci-dessous.
            </p>

            <h3>4.2 Offre Civique</h3>
            <p>
              Formation civique conforme au programme officiel de l&apos;OFPRA,
              destinée aux personnes préparant leur dossier de naturalisation ou
              de carte de résident.
            </p>
            <InfoBlock rows={[
              ['Tarif standard', '6 € TTC / mois (tarif réduit permanent −50 %)'],
              ['Contenu inclus', '8 modules civiques · leçons · quiz par module · examens blancs'],
              ['Bonus inclus', 'Fiches de révision · Attestation PDF téléchargeable · Suivi de progression'],
              ['Durée', 'Sans engagement — renouvelable chaque mois'],
              ['Résiliation', 'À tout moment, effective à la fin de la période en cours'],
            ]} />

            <h3>4.3 Offre Langue française</h3>
            <p>
              Formation linguistique progressive en français, couvrant les niveaux A2 à B2,
              incluant la préparation spécifique à l&apos;entretien de naturalisation.
            </p>
            <InfoBlock rows={[
              ['Tarif standard', '6 € TTC / mois (tarif réduit permanent −50 %)'],
              ['Contenu inclus', '2 700 exercices · grammaire · conjugaison · expression écrite · phonétique'],
              ['Bonus inclus', 'Préparation à l\'entretien · Examens blancs langue (A2 / B1 / B2)'],
              ['Durée', 'Sans engagement — renouvelable chaque mois'],
              ['Résiliation', 'À tout moment, effective à la fin de la période en cours'],
            ]} />

            <h3>4.4 Offre Bundle Complet</h3>
            <p>
              Accès combiné aux formations Civique et Langue française — formule tout-en-un
              recommandée pour une préparation complète à la naturalisation.
            </p>
            <InfoBlock rows={[
              ['Tarif standard', '10 € TTC / mois (tarif réduit permanent −50 %)'],
              ['Contenu inclus', 'Intégralité des offres Civique et Langue française'],
              ['Durée', 'Sans engagement — renouvelable chaque mois'],
              ['Résiliation', 'À tout moment, effective à la fin de la période en cours'],
            ]} />

            <h3>4.4bis Offre Accès à vie (paiement unique)</h3>
            <p>
              L&apos;éditeur propose une offre alternative, payable en une seule fois,
              donnant accès à l&apos;intégralité des contenus Civique et Langue française
              (formule Bundle), <strong>sans abonnement ni prélèvement récurrent</strong>.
            </p>
            <InfoBlock rows={[
              ['Tarif', '20 € TTC, paiement unique'],
              ['Contenu inclus', 'Intégralité des offres Civique et Langue française, y compris les mises à jour de contenu futures'],
              ['Nature du paiement', 'Achat unique — aucun renouvellement, aucun prélèvement ultérieur'],
              ['Portée de « à vie »', 'Voir définition précise ci-dessous'],
            ]} />
            <p>
              <strong>Définition contractuelle de « accès à vie ».</strong> L&apos;expression
              « accès à vie » désigne un accès valable <strong>pendant toute la durée
              d&apos;exploitation du Site par l&apos;éditeur</strong>, et non une garantie liée à la durée
              de vie de l&apos;utilisateur. Elle ne constitue :
            </p>
            <ul>
              <li>ni un engagement de maintien indéfini de l&apos;activité de l&apos;éditeur,</li>
              <li>ni une garantie de disponibilité perpétuelle et absolue du service,</li>
              <li>ni une obligation de résultat portant sur la pérennité de la société éditrice.</li>
            </ul>
            <p>
              En conséquence, dans l&apos;hypothèse où l&apos;éditeur <strong>cesserait totalement et
              définitivement d&apos;exploiter le Site</strong> pour un motif réel et non discrétionnaire
              (cessation totale d&apos;activité de l&apos;entreprise, liquidation judiciaire, ou toute
              autre cause rendant impossible la poursuite du service, au sens de l&apos;article 1218
              du Code civil), l&apos;accès « à vie » prend fin à la date de fermeture effective du
              Site. L&apos;éditeur s&apos;engage à informer les détenteurs d&apos;un accès à vie par e-mail
              au moins <strong>60 jours avant</strong> toute fermeture définitive du Site, sauf
              impossibilité avérée (procédure judiciaire notamment).
            </p>
            <p>
              <strong>Remboursement partiel en cas de fermeture anticipée.</strong> Si cette
              fermeture définitive intervient dans les <strong>36 mois suivant l&apos;achat</strong>,
              l&apos;utilisateur a droit à un remboursement partiel calculé au prorata du temps
              restant, sur la base d&apos;une durée de référence de 36 mois
              (exemple : fermeture 12 mois après l&apos;achat → remboursement de 24/36ᵉ du prix payé).
              Passé ce délai de 36 mois, l&apos;offre est considérée comme intégralement exécutée et
              n&apos;ouvre plus droit à remboursement en cas de fermeture ultérieure du Site.
              Cette disposition ne s&apos;applique qu&apos;en cas de fermeture <strong>totale et
              définitive</strong> du Site ; elle ne s&apos;applique pas en cas de simple interruption
              temporaire, de maintenance, ou d&apos;évolution du contenu pédagogique, qui restent
              régies par l&apos;Article 8.4 et l&apos;Article 16.
            </p>

            <h3>4.5 Offres promotionnelles et réductions</h3>
            <p>
              L&apos;éditeur peut proposer ponctuellement des <strong>offres de lancement</strong>,
              codes promotionnels ou tarifs réduits pour une durée limitée. Ces offres sont
              communiquées sur le Site et/ou par e-mail et précisent explicitement leur
              date de fin et leurs conditions d&apos;application.
            </p>
            <p>
              Les tarifs promotionnels s&apos;appliquent uniquement aux <strong>nouveaux abonnements</strong>
              souscrits pendant la période de l&apos;offre, sauf mention contraire. Le tarif
              de lancement est maintenu tant que l&apos;abonnement reste actif et n&apos;est pas résilié.
              En cas de résiliation puis de réabonnement, le tarif standard en vigueur à la date
              de la nouvelle souscription s&apos;applique.
            </p>
            <p>
              Les offres promotionnelles ne sont pas cumulables entre elles sauf indication
              contraire explicite. L&apos;éditeur se réserve le droit de mettre fin à toute
              promotion à la date annoncée ou par anticipation, sans préavis, dès lors que
              les abonnements en cours ne sont pas affectés.
            </p>

            <h3>4.6 Offre de parrainage</h3>
            <p>
              Tout abonné actif peut inviter des tiers via un lien de parrainage unique.
              Les conditions détaillées (réduction pour l&apos;invité, avantage pour le parrain,
              durée de validité) sont précisées sur la page de parrainage accessible depuis
              l&apos;espace personnel. L&apos;éditeur se réserve le droit de modifier ou suspendre
              ce programme à tout moment, avec un préavis de 15 jours par e-mail.
            </p>

            <h3>4.7 Évolution des tarifs</h3>
            <p>
              L&apos;éditeur se réserve le droit de modifier ses tarifs standards. Toute
              modification sera notifiée par e-mail au moins <strong>30 jours avant</strong>
              son entrée en vigueur. L&apos;abonné pourra résilier sans frais avant l&apos;entrée
              en vigueur du nouveau tarif. À défaut de résiliation, le nouveau tarif sera
              appliqué à la prochaine échéance de facturation.
            </p>
          </Section>

          {/* ── ARTICLE 4bis — Cabinet partenaire ── */}
          <Section num="4bis" title="Offres professionnelles (B2B)">
            <h3>Outil d&apos;aperçu gratuit (prospection)</h3>
            <p>
              Le Site propose à titre gratuit un <strong>outil d&apos;aperçu</strong> accessible
              depuis la page <em>/partenaires</em>, permettant à tout professionnel (cabinet
              d&apos;avocats, association, structure d&apos;aide à l&apos;intégration) de générer un espace
              de démonstration personnalisé à partir de l&apos;URL de son site internet. Cet aperçu
              ne requiert aucune inscription et ne crée aucune relation contractuelle.
              Les données saisies (domaine, logo) sont utilisées uniquement à des fins
              d&apos;affichage et ne sont pas transmises à des tiers.
            </p>

            <h3>Licence cabinet partenaire</h3>
            <p>
              Les cabinets et associations souhaitant offrir l&apos;accès à la plateforme à leurs
              clients peuvent souscrire une <strong>licence cabinet</strong> multi-utilisateurs,
              selon les paliers indicatifs suivants (nombre d&apos;invitations actives) :
            </p>
            <InfoBlock rows={[
              ['Starter', '390 € TTC/an — jusqu\'à 30 clients'],
              ['Pro', '990 € TTC/an — jusqu\'à 100 clients'],
              ['Cabinet+', '1 990 € TTC/an — jusqu\'à 300 clients'],
              ['Sur-mesure', 'À partir de 3 990 € TTC/an — au-delà de 300 clients, sur devis'],
            ]} />
            <p>
              Ces paliers sont indicatifs et susceptibles d&apos;évoluer (voir Article 4.7). Le
              tarif définitif, la durée et les conditions précises de la licence font l&apos;objet
              d&apos;une convention séparée entre le cabinet et l&apos;éditeur.
            </p>

            <h3>Accès des utilisateurs via invitation cabinet</h3>
            <p>
              Les utilisateurs invités par un cabinet bénéficient d&apos;un accès Premium offert
              par le cabinet, sans paiement de leur part. Leur compte reste soumis aux
              présentes CGU pour tout ce qui concerne les droits et obligations individuels.
            </p>

            <h3>Droits de l&apos;administrateur cabinet</h3>
            <p>
              L&apos;administrateur du cabinet dispose d&apos;un accès limité aux données des
              utilisateurs qu&apos;il a invités : pourcentage de progression global, modules
              complétés, et génération d&apos;attestations de suivi au format PDF. Il ne peut
              pas accéder aux réponses détaillées, aux données de paiement, ni modifier
              le contenu pédagogique accessible à l&apos;utilisateur.
            </p>

            <h3>Résiliation et révocation</h3>
            <p>
              L&apos;administrateur cabinet peut révoquer l&apos;accès d&apos;un utilisateur à tout moment.
              En cas de révocation, le compte est repassé en offre gratuite ; l&apos;utilisateur
              conserve son historique de progression. En cas de non-renouvellement de la
              licence cabinet, l&apos;éditeur peut mettre fin aux accès Premium des membres
              associés avec un préavis de 15 jours par e-mail.
            </p>

            <h3>Responsabilité du cabinet</h3>
            <p>
              Le cabinet partenaire s&apos;engage à n&apos;inviter que des personnes ayant consenti à
              recevoir cet accès. Il est responsable de l&apos;usage des fonctionnalités
              d&apos;invitation, de suivi et d&apos;attestation dans le respect du RGPD et des
              présentes CGU.
            </p>
          </Section>

          {/* ── ARTICLE 5 ── */}
          <Section num="5" title="Modalités de paiement et facturation">
            <p>
              Le paiement est effectué en ligne, de façon sécurisée, via la plateforme
              <strong> Stripe</strong> (Stripe Inc., société de droit américain). Les données
              bancaires de l&apos;utilisateur ne transitent pas sur les serveurs du Site et ne
              sont pas conservées par l&apos;éditeur.
            </p>
            <p>
              L&apos;abonnement est prélevé automatiquement chaque mois, à la date anniversaire
              de la souscription initiale. Une facture est envoyée par e-mail à chaque
              prélèvement.
            </p>
            <p>
              Moyens de paiement acceptés : carte bancaire (Visa, Mastercard, American Express),
              Apple Pay, Google Pay.
            </p>
            <p>
              En cas d&apos;échec de prélèvement, l&apos;accès Premium est suspendu jusqu&apos;à
              régularisation. L&apos;utilisateur est invité par e-mail à mettre à jour
              ses informations de paiement.
            </p>
          </Section>

          {/* ── ARTICLE 6 ── */}
          <Section num="6" title="Durée et résiliation de l'abonnement">
            <p>
              L&apos;abonnement Premium est souscrit <strong>sans engagement minimum</strong>,
              pour une durée d&apos;un mois renouvelable par tacite reconduction.
            </p>
            <p>
              L&apos;utilisateur peut résilier son abonnement à tout moment depuis :
            </p>
            <ul>
              <li>Son espace personnel → section « Abonnement » → « Gérer mon abonnement »</li>
              <li>Ou par e-mail à {EMAIL} avec la mention « Résiliation abonnement »</li>
            </ul>
            <p>
              La résiliation prend effet à la <strong>fin de la période mensuelle en cours</strong>.
              L&apos;accès au contenu Premium reste actif jusqu&apos;à cette date.
              Aucun remboursement au prorata n&apos;est effectué pour les jours non utilisés.
            </p>
          </Section>

          {/* ── ARTICLE 7 ── */}
          <Section num="7" title="Politique de remboursement">
            <p>
              En application de l&apos;article L.221-28 du Code de la consommation, le <strong>droit
              de rétractation de 14 jours ne s&apos;applique pas</strong> aux contenus numériques
              dont l&apos;exécution a commencé avec l&apos;accord exprès du consommateur, ce dernier
              ayant renoncé à son droit de rétractation au moment de la souscription.
            </p>
            <p>
              <strong>Aucun remboursement ne sera effectué</strong> dans les cas suivants :
            </p>
            <ul>
              <li>L&apos;utilisateur a oublié d&apos;annuler son abonnement avant le renouvellement</li>
              <li>L&apos;utilisateur n&apos;a pas ou peu utilisé le service durant la période facturée</li>
              <li>L&apos;utilisateur a changé d&apos;avis après avoir accédé au contenu Premium</li>
              <li>L&apos;utilisateur invoque une méconnaissance des conditions de renouvellement
                tacite, celles-ci étant clairement indiquées lors de la souscription et
                dans les e-mails de confirmation</li>
            </ul>
            <p>
              Des remboursements pourront être accordés à titre exceptionnel et discrétionnaire,
              uniquement dans les cas suivants :
            </p>
            <ul>
              <li>Défaillance technique majeure imputable au Site rendant le service
                inaccessible pendant plus de 72 heures consécutives</li>
              <li>Double facturation avérée</li>
              <li>Toute autre erreur manifeste de la part de l&apos;éditeur</li>
            </ul>
            <p>
              Toute demande de remboursement doit être adressée à {EMAIL}
              dans un délai de <strong>7 jours</strong> suivant le prélèvement contesté.
            </p>
          </Section>

          {/* ── ARTICLE 8 ── */}
          <Section num="8" title="Accès au contenu et droits de l'utilisateur">
            <h3>8.1 Contenu accessible sans compte</h3>
            <p>
              La première leçon de chaque module est accessible à tout visiteur,
              sans création de compte ni paiement. L&apos;accès aux examens blancs
              est soumis à la création d&apos;un compte gratuit.
            </p>

            <h3>8.2 Contenu accessible selon l&apos;offre souscrite</h3>
            <p><strong>Offre Civique :</strong></p>
            <ul>
              <li>8 modules civiques complets conformes au programme OFPRA</li>
              <li>Quiz par module et examens blancs (CSP, CR, Naturalisation)</li>
              <li>Fiches de révision : grandes figures, lieux, dates clés</li>
              <li>Attestation PDF de suivi téléchargeable</li>
              <li>Tableau de bord et suivi de progression personnalisé</li>
            </ul>
            <p><strong>Offre Langue française :</strong></p>
            <ul>
              <li>2 700 exercices progressifs de niveau A2 à B2</li>
              <li>Grammaire, conjugaison, expression écrite, phonétique, orthographe</li>
              <li>Modules de préparation spécifique à l&apos;entretien de naturalisation</li>
              <li>Examens blancs langue (A2 / B1 / B2)</li>
              <li>Suivi de progression par niveau et par compétence</li>
            </ul>
            <p><strong>Offre Bundle Complet :</strong></p>
            <ul>
              <li>Accès à l&apos;intégralité des contenus Civique et Langue française</li>
            </ul>

            <h3>8.3 Limites d&apos;usage</h3>
            <p>
              L&apos;accès au contenu est accordé à titre personnel, non cessible et
              non transférable. Le contenu du Site est destiné à un usage privé
              de préparation à l&apos;examen civique. Toute reproduction, diffusion
              ou exploitation commerciale est interdite (voir Article 12).
            </p>

            <h3>8.4 Disponibilité du service</h3>
            <p>
              L&apos;éditeur s&apos;engage à mettre tout en œuvre pour assurer la disponibilité
              du Site 24h/24 et 7j/7. Toutefois, des interruptions pour maintenance
              ou cas de force majeure sont possibles. L&apos;éditeur ne saurait être tenu
              responsable de toute interruption de service indépendante de sa volonté.
            </p>
          </Section>

          {/* ── ARTICLE 9 ── */}
          <Section num="9" title="Obligations et responsabilités de l'utilisateur">
            <p>L&apos;utilisateur s&apos;engage à :</p>
            <ul>
              <li>Utiliser le Site conformément à sa destination et aux lois en vigueur</li>
              <li>Ne pas tenter de contourner les mécanismes de protection du contenu</li>
              <li>Ne pas partager ses identifiants de connexion ni son accès Premium</li>
              <li>Ne pas scraper, copier ou reproduire le contenu pédagogique du Site</li>
              <li>Ne pas utiliser le Site à des fins commerciales sans autorisation écrite</li>
              <li>Ne pas soumettre de contenu illicite, offensant ou trompeur</li>
            </ul>
            <p>
              Tout manquement à ces obligations peut entraîner la résiliation immédiate
              du compte, sans remboursement, et sans préjudice d&apos;éventuelles
              poursuites judiciaires.
            </p>
          </Section>

          {/* ── ARTICLE 10 ── */}
          <Section num="10" title="Exactitude du contenu pédagogique et avertissement langue">
            <h3>10.1 Contenu civique</h3>
            <p>
              Le contenu de la formation civique est élaboré à partir des références
              officielles publiées par les autorités françaises compétentes (OFPRA, OFII).
              L&apos;éditeur s&apos;efforce de maintenir ce contenu à jour mais ne garantit pas
              son exhaustivité ni son adéquation parfaite avec les épreuves réelles.
              <strong> Le Site ne remplace pas la formation civique officielle obligatoire
              délivrée par l&apos;OFII.</strong> Il constitue un outil de préparation complémentaire.
            </p>

            <h3>10.2 Contenu linguistique</h3>
            <p>
              Les exercices de langue française sont conçus pour accompagner la progression
              de l&apos;utilisateur selon les niveaux du Cadre Européen Commun de Référence
              pour les Langues (CECRL). Ils ne constituent pas un programme de formation
              officiel certifiant et ne se substituent pas à un enseignement dispensé
              par un organisme agréé.
            </p>

            <h3>10.3 Avertissement — affichage du contenu</h3>
            <p>
              La plateforme est conçue et délivrée <strong>exclusivement en langue française</strong>.
              Toutefois, l&apos;utilisateur peut ponctuellement constater que certains éléments
              d&apos;interface ou de contenu s&apos;affichent dans une autre langue, semblent incomplets
              ou temporairement indisponibles. Ces situations sont susceptibles de survenir
              lors d&apos;opérations de <strong>maintenance, de mise à jour du contenu ou de
              modifications techniques</strong> en cours de déploiement.
            </p>
            <p>
              De tels affichages temporaires ne constituent pas un défaut de la prestation
              et <strong>n&apos;affectent pas la qualité globale du service</strong>, dont l&apos;accès
              reste garanti en français. L&apos;éditeur s&apos;engage à corriger tout affichage
              anormal dans les meilleurs délais. En cas d&apos;anomalie persistante, l&apos;utilisateur
              est invité à le signaler à {EMAIL}.
            </p>

            <h3>10.4 Limitation de responsabilité pédagogique</h3>
            <p>
              L&apos;éditeur décline toute responsabilité quant au résultat obtenu à l&apos;entretien
              de naturalisation, à un examen de langue ou à toute autre évaluation officielle.
              Les résultats obtenus sur la plateforme sont indicatifs et ne garantissent pas
              les résultats réels.
            </p>
          </Section>

          {/* ── ARTICLE 11 ── */}
          <Section num="11" title="Protection des données personnelles (RGPD)">
            <p>
              Dans le cadre de l&apos;utilisation du Site, l&apos;éditeur collecte et traite
              des données personnelles conformément au Règlement Général sur la Protection
              des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés.
            </p>
            <p>Données collectées :</p>
            <ul>
              <li>E-mail, prénom (lors de l&apos;inscription)</li>
              <li>Données de paiement (traitées exclusivement par Stripe — non stockées par l&apos;éditeur)</li>
              <li>Données de progression et d&apos;activité sur la plateforme</li>
              <li>Données techniques (adresse IP, navigateur, logs de connexion)</li>
            </ul>
            <p>Finalités du traitement :</p>
            <ul>
              <li>Gestion du compte et de l&apos;abonnement</li>
              <li>Fourniture et personnalisation du service pédagogique</li>
              <li>Communication relative au service (factures, notifications)</li>
              <li>Amélioration du service par analyse statistique anonymisée</li>
            </ul>
            <p>
              L&apos;utilisateur dispose d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
              de portabilité et d&apos;opposition concernant ses données, en adressant sa demande
              à {EMAIL}. Pour toute réclamation, l&apos;utilisateur peut saisir
              la <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés —
              www.cnil.fr).
            </p>
            <p>
              Les données sont conservées pendant la durée de l&apos;abonnement actif et
              <strong> 3 ans</strong> après la résiliation du compte (obligations légales comptables),
              puis supprimées ou anonymisées.
            </p>
          </Section>

          {/* ── ARTICLE 12 ── */}
          <Section num="12" title="Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu du Site — textes, illustrations, questions, exercices,
              interfaces, logo, marque — est la propriété exclusive de l&apos;éditeur ou
              fait l&apos;objet de licences d&apos;utilisation.
            </p>
            <p>
              Les œuvres d&apos;art reproduites sur le Site sont dans le domaine public.
              Toute reproduction ou utilisation commerciale de l&apos;habillage
              éditorial du Site est strictement interdite sans autorisation écrite préalable.
            </p>
            <p>
              La marque <strong>maformationcivique.fr</strong> et le logo associé sont
              des marques protégées. Leur utilisation non autorisée expose leur auteur à
              des poursuites judiciaires.
            </p>
          </Section>

          {/* ── ARTICLE 13 ── */}
          <Section num="13" title="Cookies">
            <p>
              Le Site utilise des cookies strictement nécessaires à son fonctionnement
              (authentification, session). Aucun cookie publicitaire n&apos;est utilisé
              sans le consentement de l&apos;utilisateur.
            </p>
            <p>
              L&apos;utilisateur peut configurer son navigateur pour refuser les cookies,
              ce qui peut altérer certaines fonctionnalités du Site.
            </p>
          </Section>

          {/* ── ARTICLE 14 ── */}
          <Section num="14" title="Liens hypertextes et services tiers">
            <p>
              Le Site peut contenir des liens vers des sites tiers (OFII, service-public.fr…).
              L&apos;éditeur n&apos;exerce aucun contrôle sur ces sites et décline toute
              responsabilité quant à leur contenu.
            </p>
            <p>
              Le Site utilise les services tiers suivants :
            </p>
            <InfoBlock rows={[
              ['Supabase', 'Base de données et authentification — Supabase Inc., USA'],
              ['Stripe', 'Paiement sécurisé — Stripe Inc., USA (certifié PCI-DSS)'],
              ['Vercel', 'Hébergement — Vercel Inc., USA'],
            ]} />
          </Section>

          {/* ── ARTICLE 15 ── */}
          <Section num="15" title="Suspension et suppression de compte">
            <p>
              L&apos;éditeur se réserve le droit de suspendre ou supprimer un compte
              en cas de :
            </p>
            <ul>
              <li>Violation des présentes CGU</li>
              <li>Tentative de fraude ou d&apos;utilisation abusive du programme de parrainage</li>
              <li>Utilisation du service à des fins illicites</li>
              <li>Inactivité du compte depuis plus de 24 mois consécutifs</li>
            </ul>
            <p>
              En cas de suspension pour violation des CGU, aucun remboursement ne sera effectué.
              L&apos;utilisateur sera notifié par e-mail avant toute suppression définitive,
              sauf en cas de fraude avérée.
            </p>
            <p>
              L&apos;utilisateur peut demander la suppression de son compte à tout moment
              en écrivant à {EMAIL}. La suppression entraîne la perte
              définitive de toutes les données de progression et de l&apos;historique.
            </p>
          </Section>

          {/* ── ARTICLE 16 ── */}
          <Section num="16" title="Limitation de responsabilité">
            <p>
              Le Site est fourni « en l&apos;état ». L&apos;éditeur ne garantit pas que le service
              sera ininterrompu, sans erreur, ou adapté à un usage particulier.
            </p>
            <p>
              En tout état de cause, la responsabilité de l&apos;éditeur est limitée au montant
              des sommes effectivement versées par l&apos;utilisateur au cours des 3 derniers mois
              précédant le fait générateur.
            </p>
            <p>
              L&apos;éditeur ne saurait être tenu responsable des dommages indirects,
              y compris la perte de chance d&apos;obtenir un titre de séjour ou une naturalisation.
            </p>
          </Section>

          {/* ── ARTICLE 17 ── */}
          <Section num="17" title="Modification des CGU">
            <p>
              L&apos;éditeur se réserve le droit de modifier les présentes CGU à tout moment
              pour les adapter à l&apos;évolution du service, à la réglementation applicable
              ou à toute autre nécessité.
            </p>
            <p>
              En cas de modification substantielle (tarifs, droits des utilisateurs,
              politique de remboursement), l&apos;utilisateur sera informé par e-mail
              <strong> au moins 30 jours avant l&apos;entrée en vigueur</strong> des nouvelles dispositions.
            </p>
            <p>
              La poursuite de l&apos;utilisation du Site après ce délai vaut acceptation
              des CGU modifiées. À défaut, l&apos;utilisateur peut résilier son abonnement
              sans frais avant l&apos;entrée en vigueur.
            </p>
            <p>
              La date de la dernière modification figure en haut du présent document.
              Les versions antérieures sont archivées et accessibles sur simple demande
              à {EMAIL}.
            </p>
          </Section>

          {/* ── ARTICLE 18 ── */}
          <Section num="18" title="Droit applicable et résolution des litiges">
            <p>
              Les présentes CGU sont soumises au <strong>droit français</strong>.
            </p>
            <p>
              En cas de litige, l&apos;utilisateur est invité à contacter l&apos;éditeur
              en premier lieu à {EMAIL} pour tenter une résolution amiable.
            </p>
            <p>
              Conformément aux articles L.612-1 et suivants du Code de la consommation,
              l&apos;utilisateur peut recourir à une médiation conventionnelle ou à tout
              autre mode alternatif de règlement des différends.
            </p>
            <p>
              La plateforme européenne de règlement en ligne des litiges est accessible
              sur : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer"
              style={{ color: 'var(--color-blue-france)' }}>https://ec.europa.eu/consumers/odr</a>
            </p>
            <p>
              À défaut de résolution amiable, tout litige relève de la compétence
              exclusive des <strong>tribunaux français</strong>.
            </p>
          </Section>

          {/* ── ARTICLE 19 ── */}
          <Section num="19" title="Dispositions diverses">
            <p>
              Si une clause des présentes CGU est déclarée nulle ou inapplicable,
              les autres clauses restent en vigueur.
            </p>
            <p>
              Le fait pour l&apos;éditeur de ne pas se prévaloir d&apos;un manquement de
              l&apos;utilisateur à une obligation ne saurait être interprété comme une
              renonciation à l&apos;obligation en cause.
            </p>
          </Section>

          {/* Footer légal */}
          <div style={{
            background: 'var(--color-blue-light)',
            borderRadius: '12px',
            padding: '20px 24px',
            border: '1.5px solid var(--color-blue-france)',
            opacity: 0.8,
          }}>
            <p style={{ fontSize: '13px', color: 'var(--color-blue-france)', margin: 0 }}>
              <strong>Document version 2.2 — {LAST_UPDATE}</strong><br />
              Pour toute question relative à ces CGU : <a href={`mailto:${EMAIL}`}
              style={{ color: 'var(--color-blue-france)' }}>{EMAIL}</a>
            </p>
          </div>

        </div>
      </div>

      <style>{`
        .cgu-section h3 {
          font-size: 15px;
          font-weight: 600;
          color: var(--color-text-primary);
          margin: 20px 0 10px;
        }
        .cgu-section p {
          font-size: 15px;
          color: var(--color-text-secondary);
          line-height: 1.75;
          margin: 0 0 12px;
        }
        .cgu-section ul {
          list-style: none;
          padding: 0;
          margin: 0 0 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cgu-section ul li {
          font-size: 15px;
          color: var(--color-text-secondary);
          line-height: 1.65;
          padding-left: 18px;
          position: relative;
        }
        .cgu-section ul li::before {
          content: attr(class);
          position: absolute;
          left: 4px;
          top: 9px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-blue-france);
        }
      `}</style>
    </div>
  );
}

// ── Composants helper ─────────────────────────────────────────────────────────

function Section({
  num, title, children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cgu-section" style={{ scrollMarginTop: '80px' }} id={`article-${num}`}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '16px',
        paddingBottom: '12px', borderBottom: '2px solid var(--color-blue-france)',
      }}>
        <span style={{
          fontSize: '11px', fontWeight: 700, color: 'var(--color-blue-france)',
          textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap',
        }}>
          Art. {num}
        </span>
        <h2 style={{
          fontSize: '18px', fontWeight: 700, color: 'var(--color-text-primary)', margin: 0,
        }}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function InfoBlock({ rows }: { rows: [string, string][] }) {
  return (
    <div style={{
      background: '#fff', border: 'var(--border-default)',
      borderRadius: '10px', overflow: 'hidden', margin: '12px 0 16px',
    }}>
      {rows.map(([key, val], i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '180px 1fr',
          borderBottom: i < rows.length - 1 ? 'var(--border-default)' : 'none',
        }}>
          <div style={{ padding: '10px 14px', background: '#F8FAFF', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {key}
          </div>
          <div style={{ padding: '10px 14px', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
            {val}
          </div>
        </div>
      ))}
    </div>
  );
}
