
import Centerhome from "@/components/cardcenterhome";
import { Cardhome } from "@/components/cardhome";
import { Cardworkhome } from "@/components/cardworkhome";

export default function HomePage() {
  return (
    <div className="bg-muted flex miSn-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
          <div className={`container mx-auto p-8 pt-26`}>
            <h1 className="mb-4 text-center text-3xl">
              ຍິນດີຕອນຮັບ, ຄົນຫລໍ່ແລະນ່າຮັກ ເຂົ້າສູ່ເຂົາວົງກົດປ່າທຶບໜາ!!
            </h1>
            <p className="mb-10 text-center text-sm text-zinc-500">
              ເຮົາມີ ຊື່ວ່າ ເລ້ ມັກຮັກໃນການອອກແບບ, ກົດໝາຍ ແລະ ບັນດາເທັກໂນໂລຊີ{" "}
              <span className="font-medium">ສຶກສາ</span>. ຮຽນຮຼ້ສິ່ງໃໝ່ຽທາງດ້ານ ວິທະຍາສາດການສຶກສາ
              ສິ່ງທີ່ທັນສະໃໝ່<span className="font-medium">ຍຸກແຫຼ່ງ</span> Ai.
            </p>
          </div>
      </div>
        <Cardhome />
        <Centerhome />
        <Cardworkhome />
    </div>
  )
}