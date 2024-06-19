import { useErrorBoundary } from "use-error-boundary";

const ErrorBoundaryProvider: React.FC<{ children: JSX.Element }> = ({
	children,
}) => {
	const { ErrorBoundary } = useErrorBoundary();

	return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default ErrorBoundaryProvider;
