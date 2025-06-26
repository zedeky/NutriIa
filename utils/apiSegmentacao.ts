// utils/apiSegmentacao.ts
import axios from 'axios';

export async function enviarImagemSegmentacao(uri: string) {
  const formData = new FormData();
  formData.append('file', {
    uri,
    name: 'alimento.jpg',
    type: 'image/jpeg',
  } as any);

  const response = await axios.post('http://localhost:3000/api/food/segmentation', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}
