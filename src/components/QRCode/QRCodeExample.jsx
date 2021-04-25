import React, { useState } from 'react';
import QRCode from './QRCode';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useFormik } from 'formik';
import Container from 'react-bootstrap/Container';

function QRCodeExample() {
  const [dataString, setDataString] = useState('');

  const formik = useFormik({
    initialValues: {
      inputData: '',
    },
    onSubmit: (values) => {
      setDataString(values.inputData);
    },
  });

  return (
    <div className="d-flex flow-direction-row ">
      <div className="col-sm-8 mt-3">
        <Form inline onSubmit={formik.handleSubmit}>
          <Form.Group controlId="qrInfo">
            <Form.Control
              type="text"
              name="inputData"
              onChange={formik.handleChange}
              value={formik.values.inputData}
              placeholder="Input for QR code"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Generate
          </Button>
        </Form>
      </div>
      <div className="col-sm-4 mt-2 justify-content-center">
        {dataString === '' ? null : <QRCode dataString={dataString} />}
      </div>
    </div>
  );
}

export default QRCodeExample;
