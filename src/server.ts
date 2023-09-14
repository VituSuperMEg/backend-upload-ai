import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors'
import { getAllPrompts } from './routes/get-all-prompts';
import { updloadVideoRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-transcription';
import { generateAiCompletionRoute } from './routes/generate-ai-completion';


const app = fastify();

app.register(fastifyCors, {
  origin : '*'
});

app.register(getAllPrompts);
app.register(updloadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAiCompletionRoute);

app.listen({
  port : 3333,
}).then(() => {
  console.log('Server Running');
})