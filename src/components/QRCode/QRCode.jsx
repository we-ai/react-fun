import React, { useEffect, useState } from 'react';
import qrcode from 'qrcode';

/**
 * Generate QR code from a data string.
 * Usage: <QRCode dataString={yourData} {...options}/>
 * You can also put `width` as a QRCode prop or in options
 */

function QRCode({ dataString, ...opt }) {
  const [svgString, setSvgString] = useState('');

  useEffect(() => {
    if (dataString === '') return null;

    let svgWidth;

    if (!opt.width || isNaN(opt.width)) {
      let byteSize = new Blob([dataString]).size;
      svgWidth = byteSize > 80 ? ~~(byteSize / 4) + 60 : 80;
    } else {
      svgWidth = opt.width;
    }
    const generateQR = async (data) => {
      let svg = await qrcode.toString(data, { ...opt, width: svgWidth });
      setSvgString(svg);
    };

    generateQR(dataString);
  }, [dataString, opt]);

  if (dataString === '') {
    return null;
  }

  return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
}

export default QRCode;
