import { environment } from '../../../environments/environment';

export const config = {
    baseUrl: environment.production ? "":"http://localhost:3000/"
};