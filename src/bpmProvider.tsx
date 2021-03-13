import {
	Context,
	createContext,
	FunctionComponent,
	useContext,
	useState,
} from "react";
import { config } from "./config";

const initialState = config.bpm[0];

export const BPMContext: Context<any> = createContext([{}, Function]);

interface Props {
	children?: React.ReactNode;
}

export const BPMProvider: FunctionComponent<Props> = ({ children }) => {
	const [state, setState] = useState<number>(initialState);

	return (
		<BPMContext.Provider value={[state, setState]}>
			{children}
		</BPMContext.Provider>
	);
};

export const useBPM = () => useContext(BPMContext);
