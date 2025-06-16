<?php

namespace Botble\Base\Providers;

use MetaBox;
use Illuminate\Support\Arr;
use Botble\Page\Models\Page;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Botble\ACL\Models\User;
use Botble\ACL\Repositories\Interfaces\ActivationInterface;
use Botble\Multisite\Repositories\Interfaces\MultisiteInterface;
use Botble\PagesPedding\Models\PagesPedding;
use Illuminate\Support\Facades\View;

/**
 * Class HookServiceProvider
 * @package Botble\Base\Providers
 * 
 * Provider này chịu trách nhiệm khởi tạo và đăng ký các hook trong hệ thống
 * Hook sẽ được thực thi đầu tiên khi ứng dụng khởi động
 */
class HookServiceProvider extends ServiceProvider
{
    /**
     * Boot các services cho ứng dụng
     * 
     * @return void
     */
    public function boot()
    {
        // Ẩn thông báo license invalid
        View::composer('core/base::system.license-invalid', function($view) {
            $view->with('hidden', true);
        });

        // Thêm script để xử lý giao diện meta boxes
        // Script này sẽ thêm chức năng ẩn/hiện cho các widget meta boxes
        add_filter(BASE_FILTER_FOOTER_LAYOUT_TEMPLATE, function ($payload) {
            return $payload . "<script>
            setTimeout(() => {
                // Ẩn tất cả các widget-body ban đầu
                [...document.querySelectorAll('.col-md-9 .widget.meta-boxes .widget-body')].forEach(el => el.classList.add('d-none'));
                
                // Thêm style và icon cho widget-title
                [...document.querySelectorAll('.col-md-9 .widget.meta-boxes .widget-title')].forEach(el => {
                    el.style.cursor = 'pointer';
                    el.style.position = 'relative';
                    let nodeI = document.createElement('i');
                    nodeI.classList.add('fa', 'fa-caret-down')
                    nodeI.style.position = 'absolute';
                    nodeI.style.top = '50%';
                    nodeI.style.right = '.7rem';
                    nodeI.style.transform = 'translateY(-50%)';
                    el.appendChild(nodeI)
                });

                // Thêm sự kiện click để toggle widget-body
                [...document.querySelectorAll('.col-md-9 .widget.meta-boxes .widget-title')].forEach(el => el.addEventListener('click', function() {
                    if(this.parentElement.querySelector('.widget-body').classList.contains('d-none')) {
                        this.querySelector('i.fa').classList.add('fa-caret-up')
                        this.querySelector('i.fa').classList.remove('fa-caret-down')
                    } else {
                        this.querySelector('i.fa').classList.add('fa-caret-down')
                        this.querySelector('i.fa').classList.remove('fa-caret-up')
                    }
                    this.parentElement.querySelector('.widget-body').classList.toggle('d-none')
                }))
            }, 1000)
            </script>";
        }, 20, 1);
    }

    /**
     * Register các services cho ứng dụng
     * 
     * @return void
     */
    public function register()
    {
        //
    }
} 