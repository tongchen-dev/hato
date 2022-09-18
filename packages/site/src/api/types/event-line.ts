export interface getAllEventLine{
	code: number;
	message: string;
	data: {
		content: string;
		datetime: string;
		contributros_email: string;
	}[]
}