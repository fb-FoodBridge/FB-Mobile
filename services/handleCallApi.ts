interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
   fields?: { [key: string]: string };
   error?:unknown | string;
  data?: T;
}

export async function handleCallApi<TInput,TOutput>( 
 apiFunction: (data: TInput) => Promise<ApiResponse<TOutput>>,
 payload: TInput
):  Promise<ApiResponse<TOutput>> {
  try {
    const response = await apiFunction(payload);
    if (!response) {
      return { success: false, message: "Sem resposta do servidor." };
    }

    if (!response.success) {
     return response;
    }
    return response;
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}