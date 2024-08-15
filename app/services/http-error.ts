export default class HttpError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.data = data;
  }
}
