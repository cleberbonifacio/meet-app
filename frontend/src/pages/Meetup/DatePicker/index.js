import React, { useRef, useEffect, useState, useMemo } from 'react';
import { addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, placeholder }) {
  const ref = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [dateSelect, setDateSelect] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  registerLocale('pt', pt);
  return (
    <>
      <ReactDatePicker
        locale="pt"
        name={fieldName}
        selected={dateSelect}
        onChange={date => setDateSelect(date)}
        ref={ref}
        timeIntervals={60}
        placeholderText={placeholder}
        showTimeSelect
        minDate={addDays(new Date(), 1)}
        dateFormat="dd/MM/yyyy 'às' h'h'"
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};
