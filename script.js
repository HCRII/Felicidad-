document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const navButtons = document.querySelectorAll('.nav-button');
    const mainTitle = document.getElementById('main-title');
    const subtitle = document.getElementById('subtitle');

    // --- Contenido de las Secciones ---
    const sections = {
        intro: {
            title: '¡Bienvenido a Tu Brújula Filosófica!',
            subtitle: 'Guía para una vida plena, tranquila y fuerte',
            text: `¡Hola! ¿Alguna vez te has preguntado qué significa realmente vivir bien? ¿No solo estar feliz un ratito, sino sentir que tu vida tiene propósito y que estás aprovechando tu potencial? Este libro interactivo te guiará a través de tres grandes pensadores de la antigüedad para que encuentres tus propias respuestas.
            <br><br>Exploraremos la **Eudaimonia** de Aristóteles (el arte de florecer), la **Ataraxia** de Epicuro (la paz del alma) y el **Estoicismo** de Séneca (la fortaleza ante la adversidad). ¡Prepárate para pensar, reflexionar y aplicar ideas poderosas a tu propia vida!`,
            activity: `
                <h3>¿Qué significa vivir bien para ti?</h3>
                <p class="question">Elige las palabras que mejor describan tu idea de una "buena vida" antes de empezar:</p>
                <div class="option-grid">
                    <button class="option-button intro-choice" data-choice="Felicidad">Felicidad</button>
                    <button class="option-button intro-choice" data-choice="Tranquilidad">Tranquilidad</button>
                    <button class="option-button intro-choice" data-choice="Fuerza">Fuerza</button>
                    <button class="option-button intro-choice" data-choice="Propósito">Propósito</button>
                    <button class="option-button intro-choice" data-choice="Paz">Paz</button>
                    <button class="option-button intro-choice" data-choice="Resiliencia">Resiliencia</button>
                    <button class="option-button intro-choice" data-choice="Éxito">Éxito</button>
                    <button class="option-button intro-choice" data-choice="Armonía">Armonía</button>
                </div>
                <div class="feedback" id="intro-feedback" style="display:none;">¡Excelente elección! La filosofía nos ayuda a entender y buscar esto.</div>
            `
        },
        aristotle: {
            title: 'Aristóteles: ¡Vivir al Máximo!',
            subtitle: 'Sé tu mejor versión a través de la virtud',
            text: `¡Hola! ¿Alguna vez te has preguntado qué significa realmente vivir bien? ¿No solo estar feliz un ratito, sino sentir que tu vida tiene propósito y que estás aprovechando tu potencial? Si es así, ¡Aristóteles es tu filósofo!
            <br><br>Este pensador griego, que vivió hace muchísimos años, no creía que la "buena vida" fuera solo tener dinero o fama. Para él, la clave era alcanzar la **Eudaimonia**, que significa algo así como "florecer" o "tener una vida plena". Imagina una planta que crece fuerte, con flores y frutos: eso es florecer. Para los humanos, es desarrollar nuestras mejores cualidades.
            <br><br>¿Y cómo logramos esa Eudaimonia? Aristóteles decía que a través de la **virtud**. No se refería a ser "perfecto", sino a desarrollar **hábitos de excelencia** en nuestra forma de ser y actuar.
            <br><br>Piensa en la virtud como el **justo medio** entre dos extremos. Por ejemplo:
            <ul>
                <li>Ser **valiente** no es ser temerario (tirarse sin pensar a algo peligroso) ni ser un cobarde (tener miedo a todo). Es encontrar el punto justo.</li>
                <li>Ser **generoso** no es despilfarrar todo tu dinero ni ser tacaño. Es saber cuándo y cómo dar.</li>
            </ul>
            La virtud se aprende practicando, como un deportista que mejora con cada entrenamiento. Si practicas la honestidad, te vuelves más honesto. Si practicas la amabilidad, te vuelves más amable. ¡Y al hacer esto, poco a poco vas construyendo esa vida plena!`,
            activity: `
                <h3>Actividad 1: Dilemas de Virtud</h3>
                <p class="question">Lee cada situación y elige la opción que mejor represente el "justo medio" de Aristóteles:</p>
                <div class="dilemma" id="dilemma1">
                    <p class="question">1. **La Tarea en Grupo:** Estás haciendo un proyecto en grupo y uno de tus compañeros no está haciendo su parte. La fecha de entrega se acerca.</p>
                    <button class="option-button" data-dilemma="1" data-answer="A">A) Dejar que todo lo haga él/ella, aunque la calificación baje.</button>
                    <button class="option-button" data-dilemma="1" data-answer="B">B) Hacer toda su parte tú solo/a para que el grupo saque buena nota.</button>
                    <button class="option-button" data-dilemma="1" data-answer="C">C) Hablar con él/ella de forma honesta y buscar una solución juntos, o hablar con el profesor si no hay cambios.</button>
                    <div class="feedback" id="feedback1"></div>
                </div>
                <div class="dilemma" id="dilemma2">
                    <p class="question">2. **El Chisme en el Pasillo:** Tus amigos están hablando mal de un compañero que no está presente. Te invitan a unirte.</p>
                    <button class="option-button" data-dilemma="2" data-answer="A">A) Unirte y decir algo aún peor para encajar con el grupo.</button>
                    <button class="option-button" data-dilemma="2" data-answer="B">B) Ignorar el chisme, pero seguir escuchando sin decir nada.</button>
                    <button class="option-button" data-dilemma="2" data-answer="C">C) Decir algo como: "Oigan, ¿no creen que es mejor no hablar de alguien que no está aquí?".</button>
                    <div class="feedback" id="feedback2"></div>
                </div>
                <div class="dilemma" id="dilemma3">
                    <p class="question">3. **El Videojuego Nuevo:** Acaba de salir un videojuego que todos tus amigos están jugando y te encanta. Podrías pasar horas y horas jugándolo.</p>
                    <button class="option-button" data-dilemma="3" data-answer="A">A) Jugarlo sin parar, día y noche, descuidando tus estudios y otras responsabilidades.</button>
                    <button class="option-button" data-dilemma="3" data-answer="B">B) No jugarlo nunca porque crees que los videojuegos son una pérdida de tiempo.</button>
                    <button class="option-button" data-dilemma="3" data-answer="C">C) Disfrutar del videojuego un tiempo limitado cada día, asegurándote de cumplir con tus estudios y tareas.</button>
                    <div class="feedback" id="feedback3"></div>
                </div>
                <h3>Actividad 2: Mi Brújula Personal</h3>
                <p class="question">Basado en lo que aprendiste de Aristóteles, ¿qué virtud te gustaría practicar más esta semana para sentirte que estás "floreciendo" o siendo tu mejor versión?</p>
                <textarea id="aristotle-reflection" placeholder="Ej: ser más organizado/a, más amable, más valiente al hablar en clase, más justo/a con mis amigos."></textarea>
            `
        },
        epicurus: {
            title: 'Epicuro: ¡Encuentra tu Paz Interior!',
            subtitle: 'Menos drama, más tranquilidad',
            text: `¿Alguna vez has sentido que tienes demasiadas preocupaciones? ¿Estrés por los estudios, por lo que piensan los demás, o por cosas que aún no han pasado? Si tu respuesta es "sí", ¡entonces el filósofo Epicuro tiene algo importante que enseñarte!
            <br><br>Epicuro, otro pensador griego, no buscaba el "florecimiento" como Aristóteles, sino la **Ataraxia**. ¿Y qué es eso? Imagina un lago en un día sin viento: el agua está totalmente tranquila, sin una sola ola. Eso es la **Ataraxia**: la ausencia de perturbación mental, la paz del alma. Y junto a ella, la **Aponía**, que es la ausencia de dolor físico. Para Epicuro, estas dos cosas eran la clave de una vida feliz.
            <br><br>Pero, ¡ojo! A menudo se malinterpreta a Epicuro. La gente piensa que solo hablaba de fiestas y lujos. ¡Nada de eso! Para él, el verdadero placer no era el exceso, sino la **ausencia de dolor y la tranquilidad**. Creía que para ser feliz, debíamos:
            <ol>
                <li>**Limitar nuestros deseos:** Entender qué necesitamos realmente (comida, refugio, amistad) y qué son deseos vanos que solo nos traen más problemas (lujos infinitos, fama a toda costa). ¡Menos es más, cuando hablamos de paz mental!</li>
                <li>**Cultivar la amistad:** Para Epicuro, los amigos eran esenciales. Compartir con personas que te apoyan y entienden es una de las mayores fuentes de placer y seguridad.</li>
                <li>**No preocuparse por lo que no controlamos:** Especialmente, el futuro y la muerte. Si no podemos cambiarlo, ¿por qué gastar nuestra energía preocupándonos?</li>
            </ol>
            En resumen, Epicuro nos invita a simplificar nuestra vida, a disfrutar de los pequeños placeres, a valorar la amistad y a liberarnos de las preocupaciones innecesarias para alcanzar esa calma mental que nos trae la verdadera felicidad.`,
            activity: `
                <h3>Actividad 1: Clasifica tus Deseos</h3>
                <p class="question">Haz clic en cada deseo para clasificarlo según la perspectiva de Epicuro. ¡Aprende a identificar lo que te da paz!</p>
                <div class="desires-to-categorize">
                    <div class="desire-card" data-desire="agua">Tener agua cuando tienes sed.</div>
                    <div class="desire-card" data-desire="celular">Tener el último modelo de celular.</div>
                    <div class="desire-card" data-desire="comida">Comer una buena comida cuando tienes hambre.</div>
                    <div class="desire-card" data-desire="fama">Ser muy famoso en redes sociales.</div>
                    <div class="desire-card" data-desire="amigos">Pasar tiempo con tus amigos.</div>
                    <div class="desire-card" data-desire="carro">Un carro deportivo muy caro.</div>
                    <div class="desire-card" data-desire="dormir">Dormir las horas necesarias.</div>
                    <div class="desire-card" data-desire="loteria">Ganar una lotería enorme.</div>
                </div>
                <div class="category-container">
                    <div class="category-box" id="cat-necesarios">
                        <h4>Deseos Naturales y Necesarios</h4>
                        <p>Esenciales para la vida y fáciles de satisfacer.</p>
                        <div class="categorized-items"></div>
                    </div>
                    <div class="category-box" id="cat-no-necesarios">
                        <h4>Deseos Naturales pero No Necesarios</h4>
                        <p>Agradables pero no vitales; su falta no causa dolor.</p>
                        <div class="categorized-items"></div>
                    </div>
                    <div class="category-box" id="cat-vanos">
                        <h4>Deseos Vacíos y Vanos</h4>
                        <p>Ilimitados, difíciles de satisfacer, a menudo causan sufrimiento.</p>
                        <div class="categorized-items"></div>
                    </div>
                </div>
                <div class="feedback" id="epicurus-feedback" style="display:none;"></div>

                <h3>Actividad 2: El Dilema de la Paz</h3>
                <p class="question">Tienes un examen importante mañana. Te sientes un poco ansioso/a, y tus amigos te invitan a una fiesta que durará hasta tarde. Sabes que te divertirías mucho, pero también que no descansarías y eso te estresaría más para el examen.</p>
                <button class="option-button" data-dilemma="epicurus" data-answer="A">A) Ir a la fiesta para no perderte nada, y preocuparte por el examen mañana.</button>
                <button class="option-button" data-dilemma="epicurus" data-answer="B">B) Quedarte en casa estudiando toda la noche, sin descansar ni un minuto, solo para asegurar la nota.</button>
                <button class="option-button" data-dilemma="epicurus" data-answer="C">C) Decidir estudiar un tiempo razonable, descansar bien y declinar la invitación a la fiesta para estar más tranquilo/a para el examen.</button>
                <div class="feedback" id="feedback-epicurus-dilemma"></div>
            `
        },
        seneca: {
            title: 'Séneca: ¡Conviértete en un Crack de la Resiliencia!',
            subtitle: 'Controla lo que puedes, acepta lo que no',
            text: `¿Te has sentido alguna vez frustrado/a porque las cosas no salen como quieres? ¿O molesto/a por comentarios de otros que no puedes controlar? Si es así, ¡el Estoicismo es para ti!
            <br><br>Séneca, un famoso filósofo romano, fue uno de los grandes exponentes del **Estoicismo**. Esta filosofía no trata de ser "sin emociones" o indiferente, sino de ser **fuerte mentalmente** y encontrar la **paz interior** sin importar lo que pase a tu alrededor. Los estoicos creían que la verdadera libertad y felicidad vienen de controlar lo único que realmente podemos controlar: **nuestras propias actitudes, pensamientos y acciones.**
            <br><br>El concepto más importante del Estoicismo es la **Dicotomía del Control**. Es una idea súper poderosa:
            <ul>
                <li>**Lo que SÍ puedes controlar:** Tus opiniones, tus juicios, tus deseos, tus aversiones, tus decisiones, tus acciones, tu esfuerzo, tu carácter. ¡Esto es tu verdadero poder!</li>
                <li>**Lo que NO puedes controlar:** El clima, el tráfico, la opinión de los demás, el resultado de un examen (una vez que lo entregaste), las decisiones de otras personas, el pasado, el futuro incierto. Preocuparse por esto es como intentar mover una montaña con las manos. ¡Es inútil y agotador!</li>
            </ul>
            Séneca nos invita a aceptar con calma lo que no podemos cambiar y a poner toda nuestra energía en lo que sí depende de nosotros. Cuando algo malo sucede, en lugar de quejarnos o sentirnos víctimas, podemos preguntarnos: "¿Qué puedo controlar en esta situación? ¿Cómo puedo reaccionar con **sabiduría**, **valentía**, **justicia** y **templanza**?"
            <br><br>El Estoicismo te entrena para ser como un árbol fuerte que se dobla con el viento pero no se rompe. ¡Te ayuda a enfrentar los desafíos de la vida con calma y coraje!`,
            activity: `
                <h3>Actividad 1: Mi Zona de Control</h3>
                <p class="question">Haz clic en cada situación para clasificarla en "Lo controlo" o "Fuera de mi control".</p>
                <div class="situations-to-categorize">
                    <div class="desire-card" data-situation="esfuerzo">Cuánto esfuerzo pongo en mi tarea.</div>
                    <div class="desire-card" data-situation="amigos-incluyen">Si mis amigos me incluyen en sus planes.</div>
                    <div class="desire-card" data-situation="reaccion-critica">Mi reacción cuando alguien me critica.</div>
                    <div class="desire-card" data-situation="resultado-partido">El resultado de un partido de fútbol.</div>
                    <div class="desire-card" data-situation="calificaciones">Las calificaciones que saco en mis exámenes (una vez que los presenté).</div>
                    <div class="desire-card" data-situation="reunion-estudio">Si voy a una reunión de estudio.</div>
                    <div class="desire-card" data-situation="clima">El clima para mañana.</div>
                    <div class="desire-card" data-situation="actitud-problema">Mi actitud ante un problema difícil.</div>
                </div>
                <div class="category-container">
                    <div class="category-box" id="cat-control">
                        <h4>¡Está en mi Control!</h4>
                        <p>Mis decisiones, acciones, pensamientos.</p>
                        <div class="categorized-items"></div>
                    </div>
                    <div class="category-box" id="cat-no-control">
                        <h4>¡Fuera de mi Control!</h4>
                        <p>Eventos externos, opiniones de otros, el pasado.</p>
                        <div class="categorized-items"></div>
                    </div>
                </div>
                <div class="feedback" id="seneca-feedback" style="display:none;"></div>

                <h3>Actividad 2: Mi Reto Estoico del Día</h3>
                <p class="question">Genera un pequeño reto estoico. ¡Intenta aplicarlo hoy o esta semana!</p>
                <div class="challenge-box">
                    <p class="challenge-text" id="daily-challenge">Haz clic en "Generar Reto" para obtener tu desafío.</p>
                    <button class="generate-button" id="generate-challenge-btn">Generar Reto Estoico</button>
                    <textarea id="challenge-reflection" placeholder="Hoy mi reto estoico es... y lo aplicaré así:"></textarea>
                </div>
            `
        },
        compare: {
            title: '¡Conectando los Puntos! ¿Quién Dijo Qué?',
            subtitle: 'Similitudes y diferencias entre grandes ideas',
            text: `¡Hemos viajado por tres caminos increíbles hacia una vida más plena! Hemos visto cómo Aristóteles nos invita a **florecer** siendo nuestra mejor versión, cómo Epicuro busca la **paz interior** eliminando el drama innecesario, y cómo Séneca nos enseña a ser **fuertes y resilientes** frente a lo que no podemos controlar.
            <br><br>Aunque cada filósofo tenía su enfoque principal, verás que todos buscaban algo parecido: ayudarnos a vivir una **vida buena y significativa**. La clave está en entender qué es lo más importante para cada uno y cómo sus consejos pueden unirse para formar tu propia "brújula" personal.
            <br><br><strong>Piensa en esto:</strong>
            <ul>
                <li>**Aristóteles:** Nos dice que busquemos la **excelencia** en todo lo que hacemos, encontrando el **justo medio** y desarrollando **virtudes** como la valentía, la justicia y la generosidad. Su objetivo es el **florecimiento** (Eudaimonia) a través de la razón y la acción.</li>
                <li>**Epicuro:** Nos anima a simplificar la vida, a disfrutar de los **placeres sencillos** (como la amistad y la tranquilidad), y a evitar el dolor y las preocupaciones innecesarias. Su meta es la **paz mental** (Ataraxia) y la ausencia de dolor físico (Aponía).</li>
                <li>**Séneca (Estoicismo):** Nos enseña a aceptar lo que no podemos cambiar y a enfocarnos solo en lo que **sí podemos controlar**: nuestras actitudes y acciones. Busca la **fortaleza** y la **calma interior** frente a la adversidad, cultivando virtudes como la sabiduría y la resiliencia.</li>
            </ul>
            Como ves, todos nos dan herramientas para navegar la vida, pero con enfoques ligeramente distintos. ¡Lo genial es que puedes tomar lo mejor de cada uno para construir tu propio camino!`,
            activity: `
                <h3>Actividad 1: ¡Adivina el Filósofo!</h3>
                <p class="question">Haz clic en cada frase o idea y luego haz clic en el filósofo que la dijo (o con la que se asocia más).</p>
                <div class="comparison-card-container" id="comparison-ideas">
                    <div class="comparison-card" data-idea="virtud-medio" data-philosopher="aristotle">"La virtud es el justo medio entre dos extremos."</div>
                    <div class="comparison-card" data-idea="no-control" data-philosopher="seneca">"No te preocupes por lo que no puedes controlar."</div>
                    <div class="comparison-card" data-idea="amistad-placer" data-philosopher="epicurus">"La amistad es una de las mayores fuentes de placer."</div>
                    <div class="comparison-card" data-idea="paz-alma" data-philosopher="epicurus">"El objetivo es la paz del alma, no el placer excesivo."</div>
                    <div class="comparison-card" data-idea="vida-plena" data-philosopher="aristotle">"La vida plena se alcanza a través de la excelencia y el desarrollo de tu potencial."</div>
                    <div class="comparison-card" data-idea="aceptar-reaccion" data-philosopher="seneca">"Acepta lo que no puedes cambiar y enfócate en tu reacción."</div>
                </div>
                <div class="category-container philosophy-targets">
                    <div class="philosopher-target" data-philosopher="aristotle">Aristóteles</div>
                    <div class="philosopher-target" data-philosopher="epicurus">Epicuro</div>
                    <div class="philosopher-target" data-philosopher="seneca">Séneca (Estoicismo)</div>
                </div>
                <div class="feedback" id="compare-feedback" style="display:none;"></div>

                <h3>Actividad 2: Mi Filosofía Híbrida</h3>
                <p class="question">Pensando en todo, ¿qué ideas de cada filósofo resuenan más contigo para construir tu propia "filosofía de vida"?</p>
                <textarea id="hybrid-philosophy-reflection" placeholder="Ej: De Aristóteles me quedo con... De Epicuro me gusta... Y de Séneca aplico..."></textarea>
            `
        },
        apply: {
            title: '¡Tu Propia Brújula Filosófica en Acción!',
            subtitle: 'Lleva la sabiduría a tu día a día',
            text: `¡Felicidades! Has explorado caminos increíbles que los filósofos antiguos nos dejaron para vivir una vida con más propósito, paz y fortaleza. Pero, ¿de qué sirve tanta sabiduría si no la usamos? ¡Ahora es tu turno de ponerla en práctica!
            <br><br>Recuerda: la filosofía no es solo para leer en libros viejos. ¡Es una **herramienta poderosa** para tu vida diaria! Aquí te damos algunas ideas y un espacio para que crees tu propio plan.
            <br><br><strong>Para empezar a aplicar estas ideas, piensa en esto:</strong>
            <ul>
                <li>**Aristóteles te invita a la excelencia:** ¿Qué pequeño paso puedes dar hoy para ser mejor en algo que te importa? ¿Ser más honesto en tus palabras, más dedicado en tus estudios, más amable con tus amigos?</li>
                <li>**Epicuro te anima a la tranquilidad:** ¿Qué preocupación innecesaria puedes intentar soltar hoy? ¿Qué pequeño placer sencillo puedes disfrutar y agradecer (un buen descanso, una conversación con un amigo, tu música favorita)?</li>
                <li>**Séneca te reta a la fortaleza:** ¿Qué situación "incontrolable" te ha generado estrés hoy? ¿Puedes aceptar esa situación y concentrarte solo en cómo reaccionas ante ella? ¿Cómo puedes mantener tu calma interior?</li>
            </ul>
            No necesitas convertirte en un filósofo experto de la noche a la mañana. La clave es dar **pequeños pasos** y ser constante. Cada pequeña acción que alinee con estas ideas es un paso más hacia tu propia "buena vida". ¡Vamos a crear tu plan!`,
            activity: `
                <h3>Actividad 1: Mi Reto Semanal Personal</h3>
                <p class="question">¿Qué pequeño reto filosófico quieres comprometerte a intentar esta semana? Elige una opción y personalízala:</p>
                <div class="challenge-selector">
                    <label>
                        <input type="radio" name="weekly-challenge" value="aristotle-challenge">
                        **Reto Aristotélico:** "Buscaré el **justo medio** en una situación que me cause tensión (ej: uso de redes sociales, tiempo de estudio vs. ocio)."
                    </label>
                    <label>
                        <input type="radio" name="weekly-challenge" value="epicurus-challenge">
                        **Reto Epicúreo:** "Intentaré soltar una **preocupación innecesaria** sobre el futuro o lo que otros piensan de mí."
                    </label>
                    <label>
                        <input type="radio" name="weekly-challenge" value="seneca-challenge">
                        **Reto Estoico:** "Cuando algo que **no puedo controlar** me moleste, pausaré y me enfocaré solo en **mi reacción**."
                    </label>
                    <label>
                        <input type="radio" name="weekly-challenge" value="custom-challenge">
                        **Reto Personalizado:** "Voy a combinar ideas de diferentes filósofos para..."
                    </label>
                </div>
                <textarea id="weekly-challenge-details" placeholder="Mi reto específico esta semana será: [Espacio para escribir]. Por ejemplo, si elijo Aristóteles, podría escribir: 'Voy a intentar ser más honesto en mis conversaciones, incluso cuando sea difícil'." rows="4"></textarea>

                <h3>Actividad 2: Mi Diario de Reflexión Rápida</h3>
                <p class="question">¡Aplica la filosofía hoy! Escribe una breve reflexión sobre cómo la usaste o cómo te sentiste al intentarlo.</p>
                <textarea id="daily-reflection" placeholder="¿Hubo algún momento hoy donde aplicaste (o pudiste haber aplicado) alguna de estas ideas? ¿Qué te hizo sentir? ¿Qué aprendiste para mañana/la próxima vez?" rows="6"></textarea>
                <button class="generate-button" id="save-reflection-btn">Guardar Reflexión</button>
                <div class="feedback" id="save-feedback" style="display:none;"></div>
            `
        }
    };

    // --- Lógica de Navegación y Carga de Contenido ---
    function loadSection(sectionName) {
        const section = sections[sectionName];
        if (!section) return;

        contentDiv.innerHTML = `
            <h2>${section.title}</h2>
            <p>${section.text}</p>
            <div class="activity">
                ${section.activity}
            </div>
        `;
        
        // Actualizar título y subtítulo principal
        mainTitle.textContent = section.title;
        subtitle.textContent = section.subtitle;

        // Limpiar el feedback en cada cambio de sección
        clearAllFeedback();

        // Inicializar actividades específicas de cada sección
        initializeActivities(sectionName);
    }

    function clearAllFeedback() {
        document.querySelectorAll('.feedback').forEach(el => {
            el.innerHTML = '';
            el.style.display = 'none';
        });
        document.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('correct', 'incorrect');
        });
        document.querySelectorAll('.desire-card').forEach(card => {
            card.classList.remove('categorized');
            card.style.display = 'block'; // Asegura que estén visibles
        });
        document.querySelectorAll('.categorized-items').forEach(itemsDiv => {
            itemsDiv.innerHTML = ''; // Limpia elementos categorizados
        });
        document.querySelectorAll('.comparison-card').forEach(card => {
            card.classList.remove('correct-match', 'incorrect-match', 'selected');
            card.style.opacity = '1';
        });
    }

    function initializeActivities(sectionName) {
        switch (sectionName) {
            case 'intro':
                document.querySelectorAll('.intro-choice').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const feedbackDiv = document.getElementById('intro-feedback');
                        feedbackDiv.textContent = `¡Excelente elección! La filosofía nos ayuda a entender y buscar ${e.target.dataset.choice}.`;
                        feedbackDiv.style.display = 'block';
                        // Opcional: deshabilitar botones después de la selección
                        document.querySelectorAll('.intro-choice').forEach(btn => btn.disabled = true);
                    });
                });
                break;
            case 'aristotle':
                document.querySelectorAll('.option-button[data-dilemma]').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const dilemmaNum = e.target.dataset.dilemma;
                        const answer = e.target.dataset.answer;
                        const feedbackDiv = document.getElementById(`feedback${dilemmaNum}`);
                        let isCorrect = false;
                        let feedbackText = '';

                        if (dilemmaNum === '1') { // Tarea en grupo
                            isCorrect = (answer === 'C');
                            feedbackText = isCorrect ? '¡Bien! Elegir hablar con tu compañero y buscar soluciones es un buen ejemplo de **justicia** y **responsabilidad**. No ignoras el problema (cobardía) ni lo resuelves solo (exceso de carga), sino que buscas el equilibrio y el bien común del grupo.' : 'No del todo. Aristóteles buscaría el equilibrio. Piensa en qué opción es el "justo medio" entre ser demasiado pasivo o asumir toda la carga.';
                        } else if (dilemmaNum === '2') { // Chisme en el pasillo
                            isCorrect = (answer === 'C');
                            feedbackText = isCorrect ? '¡Exacto! Defender a alguien, incluso si no está presente, demuestra **valentía** y **justicia**. No te unes al chisme (exceso) ni te quedas callado/a por miedo (defecto). Buscas el justo medio.' : 'No del todo. Aristóteles buscaría el valor de defender la justicia sin caer en el extremo del chisme o la pasividad.';
                        } else if (dilemmaNum === '3') { // Videojuego Nuevo
                            isCorrect = (answer === 'C');
                            feedbackText = isCorrect ? '¡Así es! Esto demuestra **templanza** y **moderación**. Disfrutas de algo que te gusta, pero sin caer en el exceso y descuidar otras áreas importantes de tu vida.' : 'No del todo. Aristóteles aconsejaría la moderación. Demasiado de algo bueno puede ser dañino, y muy poco puede ser una limitación innecesaria.';
                        }

                        e.target.classList.add(isCorrect ? 'correct' : 'incorrect');
                        feedbackDiv.innerHTML = feedbackText;
                        feedbackDiv.style.display = 'block';
                    });
                });
                break;
            case 'epicurus':
                const desires = {
                    'agua': { category: 'cat-necesarios', feedback: '¡Correcto! Es esencial y fácil de satisfacer, trayendo paz al cubrir una necesidad básica.' },
                    'celular': { category: 'cat-no-necesarios', feedback: 'Así es. Es natural desearlo, pero no es necesario para la vida y su falta no causa dolor.' },
                    'comida': { category: 'cat-necesarios', feedback: '¡Correcto! Una necesidad básica para la vida, cuya satisfacción evita el dolor y trae tranquilidad.' },
                    'fama': { category: 'cat-vanos', feedback: 'Epicuro diría que este es un deseo vano. La fama es algo externo, difícil de controlar y su búsqueda constante puede llevar a mucha ansiedad y decepción, ¡lejos de la Ataraxia!' },
                    'amigos': { category: 'cat-no-necesarios', feedback: '¡Excelente! La amistad es natural y trae mucho placer, pero no es una necesidad física vital. Sin embargo, Epicuro la consideraba un pilar para la Ataraxia.' },
                    'carro': { category: 'cat-vanos', feedback: 'Deseo vano. Requiere mucho esfuerzo, su posesión puede traer más preocupaciones y no es esencial para la tranquilidad.' },
                    'dormir': { category: 'cat-necesarios', feedback: '¡Correcto! Una necesidad básica que, al ser satisfecha, evita el dolor físico y mental y promueve la Aponía y Ataraxia.' },
                    'loteria': { category: 'cat-vanos', feedback: 'Deseo vano. La riqueza ilimitada es un deseo insaciable que, en lugar de paz, a menudo trae más preocupaciones y problemas.' }
                };

                document.querySelectorAll('.desire-card').forEach(card => {
                    card.addEventListener('click', (e) => {
                        const desireKey = e.target.dataset.desire;
                        const { category, feedback } = desires[desireKey];
                        const targetBox = document.getElementById(category).querySelector('.categorized-items');
                        const cardText = e.target.textContent;

                        const categorizedItem = document.createElement('div');
                        categorizedItem.textContent = cardText;
                        categorizedItem.classList.add('desire-card', 'categorized'); // Mantener el estilo de tarjeta y marcar como categorizado
                        targetBox.appendChild(categorizedItem);

                        e.target.style.display = 'none'; // Ocultar la tarjeta original
                        
                        const epicurusFeedbackDiv = document.getElementById('epicurus-feedback');
                        epicurusFeedbackDiv.innerHTML = `<p>${feedback}</p>`;
                        epicurusFeedbackDiv.style.display = 'block';
                    });
                });

                document.querySelectorAll('.option-button[data-dilemma="epicurus"]').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const answer = e.target.dataset.answer;
                        const feedbackDiv = document.getElementById('feedback-epicurus-dilemma');
                        let isCorrect = false;
                        let feedbackText = '';

                        isCorrect = (answer === 'C');
                        feedbackText = isCorrect ? '¡Correcto! Esta es la elección más \'epicúrea\'. Priorizaste tu **tranquilidad mental (Ataraxia)** y tu bienestar físico (Aponía) a largo plazo sobre un placer momentáneo que podría haberte causado más estrés. ¡Bien pensado!' : 'No del todo. Epicuro buscaría evitar el dolor y la perturbación a largo plazo. Piensa en qué opción te daría más paz, no solo placer inmediato.';
                        
                        e.target.classList.add(isCorrect ? 'correct' : 'incorrect');
                        feedbackDiv.innerHTML = feedbackText;
                        feedbackDiv.style.display = 'block';
                    });
                });
                break;
            case 'seneca':
                const situations = {
                    'esfuerzo': { category: 'cat-control', feedback: '¡Así es! Tu esfuerzo es 100% tuyo y lo puedes controlar.' },
                    'amigos-incluyen': { category: 'cat-no-control', feedback: '¡Correcto! No puedes controlar las decisiones de otros, pero sí tu actitud ante ellas.' },
                    'reaccion-critica': { category: 'cat-control', feedback: '¡Exacto! Aunque no puedes controlar lo que te dicen, SÍ puedes controlar cómo eliges reaccionar.' },
                    'resultado-partido': { category: 'cat-no-control', feedback: 'Totalmente. El resultado de eventos externos como un partido está fuera de tu influencia directa.' },
                    'calificaciones': { category: 'cat-no-control', feedback: 'Una vez entregado el examen, la calificación está fuera de tu control. ¡Lo que sí controlaste fue tu estudio y esfuerzo previo!' },
                    'reunion-estudio': { category: 'cat-control', feedback: '¡Claro! Decidir ir o no a una reunión de estudio es una acción que está completamente bajo tu control.' },
                    'clima': { category: 'cat-no-control', feedback: '¡Por supuesto! El clima es un factor externo que no podemos controlar, solo podemos adaptarnos.' },
                    'actitud-problema': { category: 'cat-control', feedback: '¡Bingo! Tu actitud es siempre tuya y es lo más poderoso que puedes controlar ante cualquier problema.' }
                };

                document.querySelectorAll('.situations-to-categorize .desire-card').forEach(card => {
                    card.addEventListener('click', (e) => {
                        const situationKey = e.target.dataset.situation;
                        const { category, feedback } = situations[situationKey];
                        const targetBox = document.getElementById(category).querySelector('.categorized-items');
                        const cardText = e.target.textContent;

                        const categorizedItem = document.createElement('div');
                        categorizedItem.textContent = cardText;
                        categorizedItem.classList.add('desire-card', 'categorized');
                        targetBox.appendChild(categorizedItem);

                        e.target.style.display = 'none'; // Ocultar la tarjeta original
                        
                        const senecaFeedbackDiv = document.getElementById('seneca-feedback');
                        senecaFeedbackDiv.innerHTML = `<p>${feedback}</p>`;
                        senecaFeedbackDiv.style.display = 'block';
                    });
                });

                const challenges = [
                    'Hoy, cuando te encuentres con algo que no te guste (ej: tráfico, una cola larga, un comentario molesto), intenta aceptar la situación tal como es y enfócate solo en tu **reacción**. ¿Puedes mantener la calma?',
                    'Piensa en una preocupación que tengas sobre el **futuro**. Ahora, pregúntate: "¿Hay algo que pueda hacer AHORA mismo al respecto?" Si no, intenta soltar esa preocupación por hoy.',
                    'Identifica algo que te **irrite** hoy. En lugar de reaccionar impulsivamente, intenta hacer una pausa y elegir tu **respuesta** con sabiduría.',
                    'Antes de dormir, piensa en un desafío que hayas enfrentado hoy. ¿Qué aprendiste de él? ¿Cómo puedes aplicar tu **fortaleza interior** la próxima vez?'
                ];

                document.getElementById('generate-challenge-btn').addEventListener('click', () => {
                    const randomIndex = Math.floor(Math.random() * challenges.length);
                    document.getElementById('daily-challenge').innerHTML = challenges[randomIndex];
                });
                break;
            case 'compare':
                let selectedIdeaCard = null;
                const feedbackDiv = document.getElementById('compare-feedback');
                const correctMatches = {}; // Para llevar el registro de aciertos
                const totalIdeas = document.querySelectorAll('.comparison-card').length;

                document.querySelectorAll('.comparison-card').forEach(card => {
                    card.addEventListener('click', () => {
                        if (selectedIdeaCard) {
                            selectedIdeaCard.classList.remove('selected');
                        }
                        selectedIdeaCard = card;
                        selectedIdeaCard.classList.add('selected');
                        feedbackDiv.style.display = 'none'; // Ocultar feedback anterior
                    });
                });

                document.querySelectorAll('.philosopher-target').forEach(target => {
                    target.addEventListener('click', () => {
                        if (selectedIdeaCard) {
                            const ideaPhilosopher = selectedIdeaCard.dataset.philosopher;
                            const targetPhilosopher = target.dataset.philosopher;
                            let feedbackText = '';

                            if (ideaPhilosopher === targetPhilosopher) {
                                feedbackText = `¡Correcto! Esa idea se asocia con **${targetPhilosopher.charAt(0).toUpperCase() + targetPhilosopher.slice(1)}**.`;
                                selectedIdeaCard.classList.add('correct-match');
                                selectedIdeaCard.classList.remove('incorrect-match');
                                correctMatches[selectedIdeaCard.dataset.idea] = true;
                                selectedIdeaCard.style.opacity = '0.4'; // Hace que la tarjeta "desaparezca"
                                selectedIdeaCard.classList.remove('selected');
                                selectedIdeaCard = null; // Reiniciar
                            } else {
                                feedbackText = `Incorrecto. Esa idea no es de **${targetPhilosopher.charAt(0).toUpperCase() + targetPhilosopher.slice(1)}**. ¡Intenta de nuevo!`;
                                selectedIdeaCard.classList.add('incorrect-match');
                                selectedIdeaCard.classList.remove('correct-match');
                            }
                            feedbackDiv.innerHTML = feedbackText;
                            feedbackDiv.style.display = 'block';
                        } else {
                            feedbackDiv.innerHTML = 'Primero, selecciona una idea.';
                            feedbackDiv.style.display = 'block';
                        }

                        // Verificar si todas las ideas han sido categorizadas correctamente
                        if (Object.keys(correctMatches).length === totalIdeas) {
                            feedbackDiv.innerHTML += '<br>¡Felicidades, has conectado todas las ideas correctamente!';
                        }
                    });
                });
                break;
            case 'apply':
                document.getElementById('save-reflection-btn').addEventListener('click', () => {
                    const challengeDetails = document.getElementById('weekly-challenge-details').value;
                    const dailyReflection = document.getElementById('daily-reflection').value;
                    const saveFeedback = document.getElementById('save-feedback');

                    if (challengeDetails.trim() === '' && dailyReflection.trim() === '') {
                        saveFeedback.textContent = '¡Escribe algo en tu reto o tu reflexión para guardar!';
                        saveFeedback.style.color = 'red';
                    } else {
                        // Aquí podrías agregar lógica para guardar en localStorage si quisieras persistencia
                        // Por ahora, solo muestra un mensaje de éxito
                        saveFeedback.textContent = '¡Tu reflexión ha sido guardada! Sigue practicando.';
                        saveFeedback.style.color = 'green';
                        document.getElementById('weekly-challenge-details').value = ''; // Limpiar
                        document.getElementById('daily-reflection').value = ''; // Limpiar
                        document.querySelectorAll('input[name="weekly-challenge"]').forEach(radio => radio.checked = false);
                    }
                    saveFeedback.style.display = 'block';
                });
                break;
        }
    }

    // Cargar la sección de introducción al cargar la página
    loadSection('intro');

    // Manejar clics en los botones de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            loadSection(section);
        });
    });
});