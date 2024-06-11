import Link from "next/link";
import Button from "../_components/Button";
import Form from "../_components/Form";
import Input from "../_components/Input";
import { signIn } from "../_lib/auth";

function page() {
  return (
    <Form width="w-1/3">
      <div className="flex flex-col gap-5 border-b-2 border-gray-500 pb-5">
        <h1 className="text-3xl font-bold text-center">인터뷰닷</h1>
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <div className="flex flex-col items-end">
          <Link href="/findIdPw">
            <p className="border-b border-black text-sm">
              아이디/비밀번호 찾기
            </p>
          </Link>
          <Link href="/adminLogin">
            <p className="border-b border-gray-700 text-gray-700 text-sm mt-2">
              관리자 로그인{" "}
            </p>
          </Link>
        </div>
        <Button type="long-blue"> 로그인 </Button>
        <Button type="long-white">
          <Link href="/createUser"> 회원가입 </Link>
        </Button>
      </div>
      <div className="flex">
        <Image src="" />
        <Image src="" />
        <Image src="" />
      </div>
    </Form>
  );
}

export default page;
