import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';

export default function Banner() {
  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <>
      <Container>
        <label htmlFor="banner">
          {preview ? (
            <img src={preview} alt="banner" />
          ) : (
            <div>
              <MdCameraAlt size={50} color="rgba(255, 255, 255, 0.3)" />
              <strong>Selecionar imagem</strong>
            </div>
          )}

          <input
            type="file"
            id="banner"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
            ref={ref}
          />
        </label>
      </Container>
    </>
  );
}
