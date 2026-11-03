export default function ActionButton(props) {
  const { isLoading, children, ...restProps } = props;

  return (
    <button
      disabled={isLoading}
      { ...restProps }
    >
      <div className="d-flex justify-content-center align-items-center">
        {isLoading && (
          <div className="position-absolute">
            <div
              className="spinner-border text-light"
              style={{ width: '1.5rem', height: '1.5rem', fontSize: '.75rem', verticalAlign: 'middle' }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <div style={{ opacity: isLoading ? 0 : 1 }}>
          {children}
        </div>
      </div>
    </button>
  );
}
