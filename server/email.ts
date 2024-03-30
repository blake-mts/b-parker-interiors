'use server';

export const email = async function (formData: any, other: any) {
    const data = { key: 'hello!!' };
    console.log(formData, other);
    return data;
};
