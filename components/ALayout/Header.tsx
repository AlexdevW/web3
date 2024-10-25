import Link from "next/link";
import { usePathname } from "next/navigation";
import { Connector, ConnectButton } from "@ant-design/web3";
import styles from "./styles.module.css";

export default function WtfHeader() {
  const pathname = usePathname();
  const isSwapPage = pathname === "/aswap";

  return (
    <div className={styles.header}>
      <div className={styles.title}>ASwap</div>
      <div className={styles.nav}>
        <Link
          href="/aswap"
          className={isSwapPage ? styles.active : undefined}
        >
          Swap
        </Link>
        <Link
          href="/aswap/pool"
          className={!isSwapPage ? styles.active : undefined}
        >
          Pool
        </Link>
      </div>
      <div>
        <Connector
          modalProps={{
            mode: "simple",
          }}
        >
          <ConnectButton type="text" />
        </Connector>
      </div>
    </div>
  );
}
