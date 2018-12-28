import React, {Fragment} from 'react';

const ReactiveAdsense = () => {
  const innserStyle = {
    display: 'block'
  }

  return (
    <Fragment>
      <ins className="adsbygoogle"
        style={innserStyle}
        data-ad-client="ca-pub-1407998984163880"
        data-ad-slot="4971623568"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </Fragment>
  );
};

export default ReactiveAdsense;