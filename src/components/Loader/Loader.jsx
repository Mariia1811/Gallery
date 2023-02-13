import { Hearts } from 'react-loader-spinner';

function Loader() {
  return (
    <Hearts
      height="100"
      width="100"
      color="#22a6b3"
      ariaLabel="hearts-loading"
      wrapperStyle={{
        margin: '20px auto',
      }}
      wrapperClass=""
      visible={true}
    />
  );
}

export default Loader;
