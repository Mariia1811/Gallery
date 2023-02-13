import axios from 'axios';

const galleryServices = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    q: '',
    page: 1,
    key: '32796564-0a88b372c2cdbd62904225ff4',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const fetchImages = async params => {
  const { data } = await galleryServices.get('', { params });
  return data;
};
