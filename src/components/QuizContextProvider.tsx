import { createContext, ReactNode, useContext, useMemo } from "react";
import { QuizService } from "../service/QuizService";

const ServiceContext = createContext<QuizService | null>(null);

interface Props {
	children: ReactNode
}

export const ServiceProvider = (props: Props) => {
	const serviceInstance = useMemo(() => new QuizService(), []);

	return (
		<ServiceContext.Provider value={serviceInstance}>
			{props.children}
		</ServiceContext.Provider>
	)
}

export const useService = (): QuizService => {
	const context = useContext(ServiceContext);
	if (!context) {
		throw new Error('useService must be used within a ServiceProvider');
	}
	return context
}