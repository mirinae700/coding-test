import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int m = scan.nextInt();

        if (validate(n) && validate(m)) {
            System.out.println(calculateDifference(n, m));
        } else {
            System.out.println("test");
        }
    }

    public static boolean validate(int number) {
        return number >= -2000000000 && number <= 2000000000;
    }

    public static long calculateDifference(long n, long m) {
        return Math.abs(n - m);
    }
}